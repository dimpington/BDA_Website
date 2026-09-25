# BDA Operations Runbook

Operational procedures for the Bureau of Digital Antiquities website.

This document describes the minimum operational practices required to maintain, monitor, recover, and review the production BDA website.

## 1. Production Environment

- Production domain: `https://digitalantiquities.org`
- Source repository: GitHub `BDA_Website`
- Production branch: `main`
- Hosting: Cloudflare Workers with static assets
- Build command: `npm run build`
- Deployment command: `npx wrangler deploy`
- DNS and edge security: Cloudflare
- Production source of truth: Git repository

Production changes should originate from the Git repository. Manual modification of deployed site files is not part of the normal operating procedure.

## 2. Operational Alerting

### Cloudflare

The following Cloudflare alerts are enabled:

- `BDA - Universal SSL`
  - Monitors Universal SSL certificate validation, issuance, renewal, and expiration.
- `BDA - HTTP DDoS`
  - Reports detected and mitigated HTTP DDoS attacks.

Cloudflare security activity can also be reviewed through Security Analytics and Security Events.

Cloudflare operational security alerts are delivered to:

`security@digitalantiquities.org`

This address is routed through Cloudflare Email Routing to the designated BDA administrator.

### GitHub

GitHub Actions notifications are enabled for failed workflows through GitHub and email.

Dependabot security notifications are enabled through:

- GitHub
- Email
- GitHub CLI

A weekly Dependabot alert digest is also enabled.

The CI workflow runs validation and build checks for repository changes. A failed CI workflow should therefore be investigated before the associated change is considered suitable for production.

## 3. Production Rollback

A rollback may be required when a production deployment introduces a broken page, failed asset, application error, security regression, or other significant production problem.

### Preferred rollback method

Cloudflare deployment history should be used to restore the most recent known-good production deployment when immediate recovery is required.

General procedure:

1. Open the Cloudflare dashboard.
2. Open the `bda-website` Worker.
3. Open the deployment/version history.
4. Identify the last known-good production deployment.
5. Review the version and deployment information before restoring it.
6. Restore or roll back to that deployment using Cloudflare's deployment controls.
7. Open `https://digitalantiquities.org`.
8. Perform a production smoke test.
9. Verify navigation, styling, images, FWX search/filtering, and security headers.
10. Correct the underlying problem in the Git repository before making a new production deployment.

### Git rollback

If the production source itself must be reverted, use Git rather than manually modifying deployed files.

Prefer reverting the problematic commit so that the correction remains visible in repository history.

Example:

    git log --oneline
    git revert <commit>
    git push origin main

Normal branch protection, CI, and deployment controls remain applicable.

Avoid rewriting published `main` history or force-pushing as part of normal recovery.

## 4. Post-Rollback Verification

After any rollback or recovery:

- Confirm the production homepage loads.
- Confirm primary navigation works.
- Confirm representative FWX, publication, collection, and organisation pages load.
- Confirm FWX search and filters work.
- Confirm static assets load correctly.
- Check the browser console for errors.
- Confirm HTTPS is valid.
- Confirm the expected security headers remain present.
- Review Cloudflare Security Events for unexpected activity.

The incident is considered recovered only after the production site has been verified.

## 5. DNS Backup

The DNS zone for `digitalantiquities.org` is managed by Cloudflare.

Export the DNS configuration:

1. Open Cloudflare.
2. Open `digitalantiquities.org`.
3. Go to **DNS → Records**.
4. Select **Export**.
5. Store the exported zone file with the BDA operational backups.

A fresh DNS export should be created:

- after material DNS changes;
- before significant DNS restructuring; and
- at least quarterly.

DNS exports should not normally be committed to the website source repository.

## 6. Cloudflare Security Configuration

The BDA production environment uses Cloudflare for DNS, TLS, edge security, redirects, and deployment.

### Production security configuration

The following controls have been configured and verified:

- Cloudflare proxying for the production domain
- Automatic DDoS protection
- Bot Fight Mode
- Cloudflare managed WAF protections
- AI Labyrinth
- DNSSEC
- Always Use HTTPS
- Minimum TLS version 1.2
- TLS 1.3
- HSTS
- Universal SSL
- HTTP DDoS alerting
- Universal SSL alerting
- Security Analytics and Security Events monitoring

Aggressive country blocking is not used.

Rate-limiting rules for application endpoints are deferred until the site exposes endpoints that require them.

### Redirect rules

`www.digitalantiquities.org` redirects permanently to:

`https://digitalantiquities.org`

The canonical production hostname is therefore:

`digitalantiquities.org`

### Cloudflare Access

Cloudflare Access is used to protect preview deployments.

Preview access is restricted to authorized users and should not be made publicly accessible before production publication.

Access policies should be reviewed whenever the preview deployment workflow changes.

## 7. Recurring Security Review

Cloudflare and production security configuration should be reviewed at least quarterly.

The review should include:

- DNS and DNSSEC status
- TLS configuration and certificate status
- HSTS configuration
- WAF configuration
- Bot protection
- Security Events
- operational alerts
- redirect rules
- Cloudflare Access policies
- security headers
- unexpected DNS or domain changes

Material configuration changes should be reflected in this runbook.

## 8. Dependency Review

Project dependencies should be reviewed at least monthly.

The repository uses:

- Dependabot vulnerability alerts
- Dependabot security updates
- a monthly dependency-review workflow
- `npm audit`

Security-related dependency updates should be reviewed promptly.

Before a dependency update is accepted, the production build and applicable CI checks should succeed.