Piano Practice - Packaging & Installation Guide
===============================================

Files included in this ZIP:
- index.html
- manifest.webmanifest
- sw.js
- icons/icon-192.png
- icons/icon-512.png
- README.md (this file)

Two recommended ways to run on mobile and enable Add-to-Home-Screen (A2HS):
----------------------------------------------------------------------

Option A) Recommended — Host on GitHub Pages (HTTPS)
1. Create a new GitHub repository (public is fine).
2. Upload all files and the 'icons' folder to the repository root.
3. In repo Settings -> Pages, set source to 'main' branch and root folder.
4. Wait a few minutes for GitHub Pages to publish. Your site will be HTTPS.
5. On your Galaxy phone open Chrome and visit the published URL.
   - If Chrome recognizes the manifest and SW, it will either show an install prompt,
     or the page's "설치" button (top-right) will be enabled. Tap it to install.
Notes:
- GitHub Pages automatically serves over HTTPS so service workers work.

Option B) Quick local HTTPS using ngrok (for dev/test)
1. On your development machine, unpack the ZIP and cd into the folder
2. Run a simple server: `python -m http.server 8000`
3. Install ngrok (https://ngrok.com/) and run `ngrok http 8000`
   - ngrok gives an HTTPS forwarding URL like https://abcd1234.ngrok.io
4. Open that HTTPS URL on your mobile Chrome (Galaxy). The PWA install flow will work.
5. Use the on-page "설치" button or Chrome's install menu to add to home screen.

Option C) Local device testing (advanced)
- You can host files directly on an Android device (Termux + python -m http.server) and open http://localhost:8000 on the device.
  Service Worker registration requires HTTPS except for localhost — this will work if the browser treats the host as localhost.

Important notes:
- For Chrome to show an install prompt, the page must:
  * Be served over HTTPS (or localhost)
  * Have a valid web manifest linked
  * Have a registered service worker
  * Have a start_url within scope
- Icons are provided (192, 512) to satisfy Play/Android requirements.
- If the install button doesn't appear immediately, use Chrome -> menu -> "Add to Home screen" or use the provided install button on the page.

Troubleshooting:
- If service worker fails to register, open Chrome DevTools -> Application -> Service Workers and inspect errors.
- Make sure manifest path is reachable (visit /manifest.webmanifest in the browser).
- If icons don't look right on Android, consider providing adaptive icon (foreground/background) JSON and graphic.

Want me to:
- generate adaptive foreground/background icon layers,
- create a GitHub Actions workflow to auto-publish to GitHub Pages,
- or hand-hold through pushing to your repo? Reply and I'll do it.
