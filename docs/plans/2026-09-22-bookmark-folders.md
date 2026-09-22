# X bookmark folder mirroring

The extension mirrors X's existing bookmark folders as read-only groups. X remains the source of truth; the extension does not create, rename, move, or delete folders.

The injected page bridge recognizes the `Bookmarks`, `BookmarkFoldersSlice`, and `BookmarkFolderTimeline` GraphQL operations. Folder-list responses are parsed into stable `{id, name}` records. Folder timeline responses are parsed with their folder ID and merged into bookmarks as `folderIds`, allowing a post to appear in more than one group.

The main interface adds a horizontally scrollable, searchable group picker that remains usable with 20 or more folders. `All bookmarks` is always available. Selecting a group filters both the bookmarks and authors views, while text search applies inside the selected group.

Folders and bookmark membership are persisted locally alongside the existing archive. Existing version-one archives load without migration work and default to no folder membership. If X exposes the folder list but has not yet returned a selected folder's timeline, the group still appears with a clear empty/loading hint rather than disappearing.

GraphQL query IDs are never hardcoded because X rotates them. The bridge captures live request URLs and metadata from X. Pagination remains sequential and uses the user's configured delay to reduce rate-limit risk.

Verification covers folder-list parsing, folder-timeline parsing, membership merging, JavaScript syntax, the extension manifest, and both Safari app targets.
