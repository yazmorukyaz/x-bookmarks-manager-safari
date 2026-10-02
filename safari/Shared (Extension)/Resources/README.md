<div align="center">

<img src="assets/icon-source.png" alt="Bookmark Grove icon" width="160" />

# Bookmark Grove for Safari

**A Safari Web Extension that turns saved posts into a searchable, folder-aware visual archive.**

Browse existing bookmark folders at x.com, search by author or text, and export JSON with an optional offline image archive.

**English** · [Türkçe](README.tr.md)

[Installation](#-installation) · [Features](#-features) · [Privacy](#-privacy)

</div>

---

## ⬇️ Installation

> The Safari extension is provided as an Xcode project for macOS and iOS.

1. Clone this repository.
2. Open `safari/Bookmark Grove.xcodeproj` in Xcode.
3. Select the **Bookmark Grove (macOS)** or **(iOS)** scheme and run it.
4. Enable **Bookmark Grove** in Safari → Settings → Extensions.
5. Open [x.com/i/history](https://x.com/i/history) and choose **Bookmarks**.

More detail: [Safari installation guide](SAFARI.md).

## ✨ Features

- 🧱 **Masonry grid** — bookmarks grouped into cards by month
- 🔍 **Search** and an **Authors** tab for quick filtering
- 📁 **Bookmark folders** — browse existing groups without recreating them
- ⏬ **Load All** — automatically fetches every page with a configurable delay (default 3s)
- 🗑️ **Remove bookmark** — directly from the card
- 📤 **Export to JSON or ZIP** — optionally include photos and video thumbnails for offline use
- 🗓️ **Date ranges** — export the last 7 or 30 days, a custom date range, or the full archive by tweet date
- 💾 **Local archive** — fetched bookmarks survive browser restarts
- ⚙️ **Settings** — wait time between pages (1–60s)

## ⚙️ Settings

**Right-click the extension icon → Options**, or use the **gear icon** on the bookmarks page.

## JSON output

Each record includes `bookmarkedAt` and `lastSeenAt` alongside the tweet data.
`bookmarkedAt` is the first time the extension observed the bookmark and can drive weekly or monthly processing.

## 🔒 Privacy

All data is processed **only in your browser**; nothing is sent to any external server and no analytics/telemetry is used. Details: [PRIVACY.md](PRIVACY.md)

## 🧩 Project structure

```
├── manifest.json
├── content/
│   ├── content.js    # UI
│   ├── inject.js     # Bookmark-response capture
│   ├── parser.js
│   └── styles.css
├── options/          # Settings page
├── popup/            # Safari toolbar entry point
├── safari/           # macOS and iOS Xcode project
├── icons/            # Extension icons
└── assets/           # Promotional images
```

## 📄 License

MIT
