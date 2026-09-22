const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const root = path.resolve(__dirname, "..");

test("the toolbar button opens a popup with a bookmarks entry point", () => {
  for (const extensionRoot of [
    root,
    path.join(root, "safari/Shared (Extension)/Resources"),
  ]) {
    const manifest = JSON.parse(
      fs.readFileSync(path.join(extensionRoot, "manifest.json"), "utf8"),
    );

    assert.equal(manifest.action?.default_popup, "popup/popup.html");
    assert.equal(
      fs.existsSync(path.join(extensionRoot, "popup/popup.html")),
      true,
    );
  }
});
