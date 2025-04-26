# Meyer Utils Chrome Extension

This Google Chrome extension provides a popup menu to convert selected text
(or the clipboard, if none) to Markdown, useful for preserving an outline in
ChatGTP. It uses Turndown and purify libraries and simple helpers for Google
Doc's markup style.

## Installation

1. Clone the repository to your local machine.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable "Developer mode" using the toggle in the top right.
4. Choose "Load unpacked" and select this repository.

For more details, refer to the [Chrome documentation on installing custom extensions](https://developer.chrome.com/docs/extensions/mv3/getstarted/#unpacked).

## Usage

- Click the extension icon to open the popup.
- The extension seeks 1) the webpage highlighted text 2) the text in it's popup
editor or, 3) your clipboard text.
- Click paste as Markdown to convert it.
- Then click "Copy" to reuse the text.
