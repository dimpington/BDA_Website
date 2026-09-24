const params = new URLSearchParams(window.location.search);

const query = (params.get("q") ?? "").trim().toLowerCase();
const originalQuery = (params.get("q") ?? "").trim();

const searchInput = document.querySelector("#fwx-catalogue-query");

if (searchInput) {
  searchInput.value = originalQuery;
}

const typeFilter = document.querySelector("#object-type-filter");
const selectedType = (params.get("type") ?? "").trim().toLowerCase();

const preservationFilter = document.querySelector(
  "#preservation-status-filter"
);
const selectedPreservation = (params.get("preservation") ?? "")
  .trim()
  .toLowerCase();

const rows = document.querySelectorAll("tbody tr[data-search]");

const operationalFilter = document.querySelector(
  "#operational-status-filter"
);
const selectedOperational = (params.get("operational") ?? "")
  .trim()
  .toLowerCase();

const classificationFilter = document.querySelector(
  "#classification-filter"
);
const selectedClassification = (params.get("classification") ?? "")
  .trim()
  .toLowerCase();

const collectionFilter = document.querySelector("#collection-filter");
const selectedCollection = (params.get("collection") ?? "")
  .trim()
  .toLowerCase();

const selectedPeriod = (params.get("period") ?? "").trim().toLowerCase();

const sortFilter = document.querySelector("#sort-filter");
const selectedSort = (params.get("sort") ?? "fwx-id")
  .trim()
  .toLowerCase();

let matchCount = 0;

rows.forEach((row) => {
  const searchableText = row.dataset.search ?? "";
  const rowType = row.dataset.objectType ?? "";
  const rowPreservation = row.dataset.preservationStatus ?? "";
  const rowOperational = row.dataset.operationalStatus ?? "";
  const rowClassification = row.dataset.classification ?? "";
  const rowCollections = row.dataset.collections ?? "";
  const publicationYear = Number(row.dataset.publicationYear ?? "");

  const matchesQuery =
    !query || searchableText.includes(query);

  const matchesType =
    !selectedType || rowType === selectedType;

  const matchesPreservation =
    !selectedPreservation || rowPreservation === selectedPreservation;

  const matchesOperational =
    !selectedOperational || rowOperational === selectedOperational;

  const matchesClassification =
    !selectedClassification || rowClassification === selectedClassification;

  const matchesCollection =
    !selectedCollection ||
    rowCollections.split(" ").includes(selectedCollection);

  let matchesPeriod = true;

  if (selectedPeriod && publicationYear) {
    if (selectedPeriod === "pre-1995") {
      matchesPeriod = publicationYear < 1995;
    } else if (selectedPeriod === "1995-1999") {
      matchesPeriod =
        publicationYear >= 1995 && publicationYear <= 1999;
    } else if (selectedPeriod === "2000-2004") {
      matchesPeriod =
        publicationYear >= 2000 && publicationYear <= 2004;
    } else if (selectedPeriod === "2005-2009") {
      matchesPeriod =
        publicationYear >= 2005 && publicationYear <= 2009;
    } else if (selectedPeriod === "2010-2014") {
      matchesPeriod =
        publicationYear >= 2010 && publicationYear <= 2014;
    } else if (selectedPeriod === "2015-2019") {
      matchesPeriod =
        publicationYear >= 2015 && publicationYear <= 2019;
    } else if (selectedPeriod === "2020-present") {
      matchesPeriod = publicationYear >= 2020;
    }
  }

  const matches =
    matchesQuery &&
    matchesType &&
    matchesPreservation &&
    matchesOperational &&
    matchesClassification &&
    matchesCollection &&
    matchesPeriod;

  row.style.display = matches ? "" : "none";

  if (matches) {
    matchCount++;
  }
});

const tbody = document.querySelector(".catalogue-table tbody");

if (tbody) {
  const sortedRows = [...rows].sort((a, b) => {
    if (selectedSort === "title") {
      return (a.dataset.sortTitle ?? "").localeCompare(
        b.dataset.sortTitle ?? ""
      );
    }

    if (selectedSort === "first-published") {
      return (a.dataset.sortFirstPublished ?? "").localeCompare(
        b.dataset.sortFirstPublished ?? ""
      );
    }

    if (selectedSort === "last-verified") {
      return (a.dataset.sortLastVerified ?? "").localeCompare(
        b.dataset.sortLastVerified ?? ""
      );
    }

    const aId =
      a.querySelector(".catalogue-id")?.textContent?.trim() ?? "";

    const bId =
      b.querySelector(".catalogue-id")?.textContent?.trim() ?? "";

    return aId.localeCompare(bId);
  });

  sortedRows.forEach((row) => tbody.appendChild(row));
}

if (typeFilter) {
  typeFilter.value = selectedType;

  typeFilter.addEventListener("change", () => {
    const nextParams = new URLSearchParams(window.location.search);

    if (typeFilter.value) {
      nextParams.set("type", typeFilter.value);
    } else {
      nextParams.delete("type");
    }

    window.location.search = nextParams.toString();
  });
}

if (preservationFilter) {
  preservationFilter.value = selectedPreservation;

  preservationFilter.addEventListener("change", () => {
    const nextParams = new URLSearchParams(window.location.search);

    if (preservationFilter.value) {
      nextParams.set("preservation", preservationFilter.value);
    } else {
      nextParams.delete("preservation");
    }

    window.location.search = nextParams.toString();
  });
}

if (operationalFilter) {
  operationalFilter.value = selectedOperational;

  operationalFilter.addEventListener("change", () => {
    const nextParams = new URLSearchParams(window.location.search);

    if (operationalFilter.value) {
      nextParams.set("operational", operationalFilter.value);
    } else {
      nextParams.delete("operational");
    }

    window.location.search = nextParams.toString();
  });
}

if (classificationFilter) {
  classificationFilter.value = selectedClassification;

  classificationFilter.addEventListener("change", () => {
    const nextParams = new URLSearchParams(window.location.search);

    if (classificationFilter.value) {
      nextParams.set("classification", classificationFilter.value);
    } else {
      nextParams.delete("classification");
    }

    window.location.search = nextParams.toString();
  });
}

if (collectionFilter) {
  collectionFilter.value = selectedCollection;

  collectionFilter.addEventListener("change", () => {
    const nextParams = new URLSearchParams(window.location.search);

    if (collectionFilter.value) {
      nextParams.set("collection", collectionFilter.value);
    } else {
      nextParams.delete("collection");
    }

    window.location.search = nextParams.toString();
  });
}

const periodFilter = document.querySelector(
  "#publication-period-filter"
);

if (periodFilter) {
  periodFilter.value = selectedPeriod;

  periodFilter.addEventListener("change", () => {
    const nextParams = new URLSearchParams(window.location.search);

    if (periodFilter.value) {
      nextParams.set("period", periodFilter.value);
    } else {
      nextParams.delete("period");
    }

    window.location.search = nextParams.toString();
  });
}

const status = document.getElementById("catalogue-search-status");
const queryElement = document.getElementById("catalogue-search-query");
const countElement = document.getElementById("catalogue-search-count");

if (query && status && queryElement && countElement) {
  queryElement.textContent = originalQuery;

  countElement.textContent =
    matchCount === 1
      ? "1 record located"
      : `${matchCount} records located`;

  status.hidden = false;
}

const noResults = document.getElementById("catalogue-no-results");

if (noResults && query && matchCount === 0) {
  noResults.hidden = false;
}

if (sortFilter) {
  sortFilter.value = selectedSort;

  sortFilter.addEventListener("change", () => {
    const nextParams = new URLSearchParams(window.location.search);

    if (sortFilter.value && sortFilter.value !== "fwx-id") {
      nextParams.set("sort", sortFilter.value);
    } else {
      nextParams.delete("sort");
    }

    window.location.search = nextParams.toString();
  });
}