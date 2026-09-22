const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");
const vm = require("node:vm");

function loadParser() {
  const context = { window: { location: { origin: "https://x.com" } }, URL };
  vm.runInNewContext(
    fs.readFileSync(path.join(__dirname, "../content/parser.js"), "utf8"),
    context
  );
  return context.window.XBookmarksParser;
}

test("parses every bookmark folder from X's collection slice", () => {
  const parser = loadParser();
  const result = parser.parseFolderList({
    data: { viewer: { user_results: { result: { bookmark_collections_slice: {
      items: [
        { bookmark_collection: { id: "10", name: "Design" } },
        { bookmark_collection: { id_str: "20", name: "Ideas" } },
      ],
      next_cursor: "next",
    } } } } },
  });

  assert.deepEqual(JSON.parse(JSON.stringify(result)), {
    folders: [{ id: "10", name: "Design" }, { id: "20", name: "Ideas" }],
    cursor: "next",
  });
});

test("parses a folder timeline and its collection id", () => {
  const parser = loadParser();
  const url = "https://x.com/i/api/graphql/id/BookmarkFolderTimeline?variables=" +
    encodeURIComponent(JSON.stringify({ bookmark_collection_id: "folder-1" }));
  const result = parser.parseFolderTimeline({
    data: { bookmark_collection_timeline: { timeline: { instructions: [] } } },
  }, url);

  assert.equal(result.folderId, "folder-1");
  assert.deepEqual(Array.from(result.tweets), []);
});
