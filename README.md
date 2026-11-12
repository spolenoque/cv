# Arsenii Polenok CV website

A static, responsive CV page based on the supplied PDF. It uses plain HTML, CSS, and JavaScript, with no build tools or paid services.

## Edit your CV

Open [`resume-data.js`](./resume-data.js). All visible CV text and contact details are in the `window.resume` object. Edit the words inside quotes, keeping the commas, brackets, and quotation marks. For example:

```js
title: "Data Solutions Engineer",
```

To add a bullet, copy an existing quoted line in the relevant `bullets` list and add a comma after the preceding line. Save the file and reload the page. To change the design, edit [`styles.css`](./styles.css).

The **Download CV** button points to [`assets/arsenii-polenok-cv.pdf`](./assets/arsenii-polenok-cv.pdf). Replace that file when you update the PDF. The website text and PDF are separate, so changing one does not update the other automatically. The current portrait is stored in `assets/portrait-2026.jpg`.

You can open `index.html` directly in a browser to preview edits. The site has no dependencies.

## Publish for free with GitHub Pages

The source is in the public repository [`spolenoque/cv`](https://github.com/spolenoque/cv). To turn on hosting, open **Settings → Pages** in that repository. Under **Build and deployment**, set **Source** to **Deploy from a branch**, choose **main** and **/(root)**, then save. The expected address is [`https://spolenoque.github.io/cv/`](https://spolenoque.github.io/cv/). GitHub will show the confirmed address in Pages settings.

After publishing, edit `resume-data.js` directly on GitHub using the pencil icon and commit the change. GitHub Pages publishes updates when the source branch changes. The PDF and image files can be replaced through **Add file → Upload files**.

GitHub Pages on GitHub Free requires a public repository. The contact details in this CV will be visible to anyone once published.
