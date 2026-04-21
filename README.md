# CEChecker

A Chrome extension that scans any web page for circular economy terminology, with category filtering and jump-to highlights.

Built for researchers, sustainability professionals, and anyone working in or around the circular economy space.

## Features

- **One-click page scan** - finds circular economy terms in the page text instantly
- **90+ terms in the glossary** across six categories:
  - Organisations & Frameworks
  - Core Concepts
  - Business Models
  - Materials & Waste
  - Design Principles
  - Policy & Systems
- **Category filter pills** - narrow results to a specific area
- **Definition for every term** - shown inline under each result
- **Jump to occurrence** - highlights the term on the page and scrolls to it
- **Multiple occurrence cycling** - click "Go to" repeatedly to step through every mention
- **Context excerpts** - click any term row to reveal surrounding text from the page
- **Mention count** - shows how many times each term appears

## Installation (Developer Mode)

1. Download or clone this repository
2. Open Chrome and go to `chrome://extensions`
3. Enable **Developer mode** (top right toggle)
4. Click **Load unpacked**
5. Select the `cechecker` folder

## How It Works

CEChecker injects a scanner function into the active tab using the `scripting` API:

1. It reads the full visible text of the page
2. Matches it against the built-in glossary using word-boundary regex
3. Returns matched terms with counts and surrounding context
4. Results are displayed and filterable in the popup
5. Clicking "Go to" injects highlight spans into the page and scrolls to the match

No data leaves the browser. The scan runs entirely locally.

## Permissions

| Permission | Reason |
|---|---|
| `scripting` | Injects the scanner and highlighter functions into the active tab |
| `activeTab` | Grants temporary access to the current tab when the popup is opened |

## File Structure

```
cechecker/
  manifest.json   Extension config and permissions
  popup.html      Extension popup UI and styles
  popup.js        Glossary, scan logic, rendering, and highlight/jump behaviour
  icons/          Extension icons (16px, 48px, 128px)
```

## Licence

MIT
