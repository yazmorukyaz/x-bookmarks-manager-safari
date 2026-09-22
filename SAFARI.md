# Safari version

The `safari/` directory contains the Xcode project for the Safari Web Extension.
It targets both macOS and iOS and packages the existing JavaScript, HTML, and CSS
extension code inside a native container app.

## Run on macOS

1. Open `safari/X Bookmarks Manager.xcodeproj` in Xcode.
2. Select the **X Bookmarks Manager (macOS)** scheme and your Apple Developer
   team under Signing & Capabilities.
3. Run the app, then enable **X Bookmarks Manager** in Safari > Settings >
   Extensions.
4. Allow access to `x.com`, sign in to X, and open
   `https://x.com/i/bookmarks`.

For local development without signing, Safari on macOS can also load
`safari/Shared (Extension)/Resources` through Safari > Settings > Developer >
Add Temporary Extension. Safari removes temporary extensions when Safari quits
or after 24 hours.

## Run on iOS

1. Select the **X Bookmarks Manager (iOS)** scheme in Xcode.
2. Choose a simulator or device, select your development team, and run.
3. Enable the extension under Settings > Apps > Safari > Extensions and allow
   access to `x.com`.

## Keeping the copies in sync

The Safari converter copies the web extension into
`safari/Shared (Extension)/Resources`. When the root extension changes,
regenerate the project with Apple's converter or copy the changed web assets to
that directory. Safari does not support the Chromium `options_ui.open_in_tab`
manifest flag, so keep that one property out of the Safari manifest.

## Distribution

Replace the placeholder bundle identifier if needed, configure an Apple
Developer team, archive the macOS and/or iOS app in Xcode, and submit it through
App Store Connect. App Store distribution requires Apple signing and review.
