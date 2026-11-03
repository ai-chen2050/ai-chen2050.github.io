# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

### Added
- Added `Accrue Notes` (复利笔记) and `ASC Watcher` project icons and official website links to `blog/projs/README.md`.

### Fixed
- Fixed multi-row card overlapping issue in `projs` page layout by adding `row-gap` while retaining original logo proportions and card layout (`packages/theme/src/client/styles/layouts/projs.scss`).
- Fixed GitHub Action workflow pnpm frozen lockfile mismatch error (`ERR_PNPM_LOCKFILE_CONFIG_MISMATCH`) by migrating `overrides` and `peerDependencyRules` from `package.json` to `pnpm-workspace.yaml` and updating `pnpm-lock.yaml`.


