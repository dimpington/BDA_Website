import fs from "node:fs";
import path from "node:path";

const contentRoot = path.resolve("src/content");

const directories = {
  objects: path.join(contentRoot, "digital-objects"),
  publications: path.join(contentRoot, "publications"),
  collections: path.join(contentRoot, "collections"),
};

function getIds(directory) {
  return new Set(
    fs
      .readdirSync(directory)
      .filter((file) => file.endsWith(".md") || file.endsWith(".mdx"))
      .map((file) => path.basename(file, path.extname(file)))
  );
}

const ids = {
  objects: getIds(directories.objects),
  publications: getIds(directories.publications),
  collections: getIds(directories.collections),
};

let errors = 0;

function report(source, field, target) {
  console.error(
    `Invalid relationship: ${source} -> ${field} -> ${target}`
  );
  errors++;
}

function extractFrontmatter(filePath) {
  const content = fs.readFileSync(filePath, "utf8");
  const match = content.match(/^---\s*\r?\n([\s\S]*?)\r?\n---/);

  return match ? match[1] : "";
}

function extractScalar(frontmatter, field) {
  const match = frontmatter.match(
    new RegExp(`^${field}:\\s*["']?([^"'\\r\\n]+)["']?\\s*$`, "m")
  );

  return match ? match[1].trim() : null;
}

function extractArray(frontmatter, field) {
  const lines = frontmatter.split(/\r?\n/);
  const values = [];
  let inside = false;

  for (const line of lines) {
    if (new RegExp(`^${field}:\\s*$`).test(line)) {
      inside = true;
      continue;
    }

    if (inside) {
      const item = line.match(/^\s*-\s*["']?([^"'\r\n]+)["']?\s*$/);

      if (item) {
        values.push(item[1].trim());
        continue;
      }

      if (/^\S/.test(line)) {
        break;
      }
    }
  }

  return values;
}

function extractObjectIds(frontmatter, field, idField) {
  const lines = frontmatter.split(/\r?\n/);
  const values = [];
  let inside = false;

  for (const line of lines) {
    if (new RegExp(`^${field}:\\s*$`).test(line)) {
      inside = true;
      continue;
    }

    if (inside) {
      const item = line.match(
        new RegExp(`^\\s*-\\s*${idField}:\\s*["']?([^"'\\r\\n]+)["']?\\s*$`)
      );

      if (item) {
        values.push(item[1].trim());
        continue;
      }

      if (/^\S/.test(line)) {
        break;
      }
    }
  }

  return values;
}

function validateFiles(directory, validator) {
  for (const file of fs.readdirSync(directory)) {
    if (!file.endsWith(".md") && !file.endsWith(".mdx")) continue;

    const filePath = path.join(directory, file);
    const frontmatter = extractFrontmatter(filePath);
    const source = path.basename(file, path.extname(file));

    validator(frontmatter, source);
  }
}

validateFiles(directories.objects, (frontmatter, source) => {
  for (const id of extractObjectIds(frontmatter, "relatedObjects", "fwxId")) {
    if (!ids.objects.has(id)) {
      report(source, "relatedObjects", id);
    }
  }
});

validateFiles(directories.publications, (frontmatter, source) => {
  for (const id of extractArray(frontmatter, "relatedObjects")) {
    if (!ids.objects.has(id)) {
      report(source, "relatedObjects", id);
    }
  }

  for (const id of extractArray(frontmatter, "relatedPublications")) {
    if (!ids.publications.has(id)) {
      report(source, "relatedPublications", id);
    }
  }
});

validateFiles(directories.collections, (frontmatter, source) => {
  for (const id of extractArray(frontmatter, "featuredObjects")) {
    if (!ids.objects.has(id)) {
      report(source, "featuredObjects", id);
    }
  }

  for (const id of extractArray(frontmatter, "relatedPublications")) {
    if (!ids.publications.has(id)) {
      report(source, "relatedPublications", id);
    }
  }

  for (const id of extractArray(frontmatter, "relatedCollections")) {
    if (!ids.collections.has(id)) {
      report(source, "relatedCollections", id);
    }
  }

  const keyObject = extractScalar(frontmatter, "keyObject");

  if (keyObject && !ids.objects.has(keyObject)) {
    report(source, "keyObject", keyObject);
  }
});

if (errors > 0) {
  console.error(`\nRelationship validation failed with ${errors} error(s).`);
  process.exit(1);
}

console.log("All content relationships are valid.");