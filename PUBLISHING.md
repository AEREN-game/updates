# Publishing to AEREN-game/updates

Everything was prepared locally. Nothing has been uploaded.

## 1. Repository files

Back up the existing repository. Upload the **contents of repository**, not its parent folder. Preserve existing update manifests and previous releases. Review name conflicts before replacing files. This package does not activate the automatic updater.

Use GitHub Desktop or the browser upload interface. The docs folder contains the website, screenshots, the web build in play and packages in downloads. No libraries, API keys or build service are required.

## 2. Website

Open Settings → Pages → Build and deployment → Source: Deploy from a branch. Choose the branch containing these files (usually main), select /docs and Save. The expected address is https://aeren-game.github.io/updates/.

Official instructions: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

For a different owner/repository, update README.md and the link in docs/404.html. The main website uses relative paths.

## 3. Release

Select Releases → Draft a new release. Use tag **v1.0.0-rc2**, title **AEREN 1.0.0 RC2 — Chronicles of the Abyss** and the text from RELEASE.md. Mark **Set as a pre-release**. Attach all four files from docs/downloads: the Windows and Web ZIPs and their SHA-256 files.

If RC2 has already been published, use a new tag such as v1.0.0-rc2-en instead of silently replacing files; update the README download link accordingly. Do not mark this as a final 1.0.0 release.

## 4. After publishing

Open the website, switch worlds, enlarge images and download both ZIPs. Verify their SHA-256 checksums. Start the Web edition and check saving after reload. Check the README download link. Keep the previous release until the new one passes validation.

Never upload the full workspace, private profiles or development/test folders. This distribution does not include the development project; executable Web code is necessarily accessible to browsers.
