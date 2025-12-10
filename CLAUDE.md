# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the HARDWARIO Documentation website, built with Docusaurus 3. It contains technical documentation for multiple HARDWARIO products and services including CHESTER, STICKER, EMBER, FIBER, GAUGER, TAPPER, TOWER, Milesight devices, Cloud services, and third-party application integrations.

## Development Commands

### Start Development Server
```bash
npm start
```
Starts a local development server at http://localhost:3000 with hot reload.

### Build for Production
```bash
npm run build
```
Generates static content into the `build/` directory.

### Serve Production Build
```bash
npm run serve
```
Serves the production build locally for testing.

### Clear Cache
```bash
npm run clear
```
Clears the Docusaurus cache and generated files.

## Architecture

### Multi-Instance Documentation Structure

This repository uses Docusaurus's multi-instance plugin architecture to serve multiple independent documentation sets under a single site. Each product has its own:

- **Content directory**: Root-level folders (e.g., `chester/`, `ember/`, `cloud/`)
- **Sidebar configuration**: `sidebars-{product}.js` files defining navigation
- **Route namespace**: Each product mounts at `/{product}/` (e.g., `/chester/`, `/cloud/`)

**Main documentation preset** (`chester`):
- Configured in `presets` section of `docusaurus.config.js`
- Routes to `/chester/`

**Additional product instances**:
- Configured in `plugins` array with `@docusaurus/plugin-content-docs`
- Products: `ember`, `fiber`, `tapper`, `tower`, `cloud`, `gauger`, `apps`, `sticker`, `milesight`

### Navigation Structure

The navbar in `docusaurus.config.js` organizes products into logical groups:
- **PRODUCTS**: CHESTER, STICKER, EMBER, FIBER, GAUGER, TAPPER, TOWER
- **SMART DEVICES**: MILESIGHT (third-party IoT devices)
- **CLOUD**: HARDWARIO Cloud service
- **APPS**: Third-party integrations (Ubidots, ThingsBoard, ChirpStack, The Things Stack)

### Content Organization Patterns

Most product documentation follows a consistent structure:
- `introduction.md` - Product overview
- `getting-started/` or `getting-started.md` - Quick start guides
- `catalog-applications/` - Pre-built firmware applications (CHESTER, STICKER)
- `extension-modules/` - Hardware add-ons (CHESTER)
- `firmware-sdk/` - SDK installation and development guides (CHESTER)
- `platform-connectivity/` - Network and connectivity options
- `hardware-description/` - Technical hardware specifications
- `videos-{product}/` - Video tutorial sections
- `ordering-codes.md` - Product SKUs and configurations

### Sidebar Conventions

Sidebars use standard Docusaurus patterns:
- Categories with `collapsed: true` for nested sections
- `link.type: 'doc'` links categories to index pages
- `link.type: 'generated-index'` auto-generates index pages
- External links to repositories/APIs use `type: 'link'` with `href`

## Key Configuration Files

- **`docusaurus.config.js`**: Main site configuration with all plugin instances, navbar, footer, Algolia search, theme config
- **`sidebars-{product}.js`**: Navigation sidebar for each product section
- **`src/pages/index.js`**: Custom homepage (not auto-generated from docs)
- **`src/css/custom.css`**: Global styles and CSS variables
- **`babel.config.js`**: Babel configuration for React/JSX
- **`package.json`**: Dependencies and npm scripts

## Important Conventions

### Editing Documentation

- All documentation is in Markdown format (`.md` files)
- Each product's content lives in its own root-level directory
- When editing docs, identify the correct product directory first
- Preserve existing frontmatter in Markdown files
- Follow existing sidebar structure when adding new pages

### Adding New Product Documentation

To add a new product documentation section:
1. Create a new directory at repository root (e.g., `newproduct/`)
2. Create `sidebars-newproduct.js` following existing patterns
3. Add plugin configuration to `docusaurus.config.js` plugins array
4. Add navbar entry to `docusaurus.config.js` themeConfig.navbar.items
5. Create `introduction.md` as the entry point

### Video Tutorials

Video content is organized in two locations:
1. Within product docs: `{product}/videos-{product}/`
2. Standalone sections in apps: `apps/videos-apps/`

Use `react-player` component for embedding videos (imported in pages as needed).

### Images and Assets

- Static assets go in `static/` directory
- Reference images from Markdown using absolute paths: `/img/example.png`
- The `@docusaurus/plugin-ideal-image` optimizes images automatically
- `docusaurus-plugin-image-zoom` enables click-to-zoom on images

### Links and Cross-References

- Internal links use relative paths within same product instance
- Cross-product links use absolute paths: `/cloud/api` from Chester docs
- External links to GitHub repositories and API docs are embedded in sidebars
- All docs have `editUrl` configured to GitHub for community contributions

## Technical Details

### Search

Algolia DocSearch is configured with:
- Index name: `hardwario`
- App ID: `AKRT8SVTPP`
- Contextual search disabled (searches across all product docs simultaneously)

### Theming

- Custom CSS variables in `src/css/custom.css`
- Light/dark mode enabled with light as default
- Prism themes: GitHub (light) and Dracula (dark)
- Sidebar is hideable via user preference

### Requirements

- Node.js 18+ (specified in `package.json` engines)
- Main dependencies: React 18, Docusaurus 3.9.2, MDX 3

### Build Output

- Production build generates static site in `build/` directory
- Configured to throw on broken links (`onBrokenLinks: 'throw'`)
- Broken markdown links only warn (`markdown.hooks.onBrokenMarkdownLinks: 'warn'`)

## Content Guidelines

When working on documentation:
- Match the writing style of existing docs (technical, concise, structured)
- Use consistent terminology across products (e.g., "catalog applications" not "sample apps")
- Include code blocks with proper language syntax highlighting
- Structure guides with clear step-by-step instructions
- Use collapsible sections for long content to improve readability
- Add new pages to appropriate sidebar category
