import type { PageData, PageHelpers } from "lume/core.ts";
import { html } from "html/mod.ts";
import DarkMode from "@/components/dark-mode.tmpl.ts";

/**
 * <meta property="og:title" content="" />
 * <meta property="og:type" content="" />
 * <meta property="og:url" content="" />
 * <meta property="og:image" content="" />
 *
 * <link rel="icon" href="/favicon.ico" sizes="any" />
 * <link rel="icon" href="/icon.svg" type="image/svg+xml" />
 * <link rel="apple-touch-icon" href="icon.png" />
 *
 * <link rel="stylesheet" href="css/normalize.css" />
 * <link rel="stylesheet" href="css/style.css" />
 * <link rel="manifest" href="site.webmanifest" />
 *
 * <meta name="theme-color" content="#fafafa" />
 */

export default ({ title, content }: PageData, _filters: PageHelpers) => {
  return (
    html`<!DOCTYPE html>
    <html lang="en">
      ${DarkMode}
      <head>
        <meta charset="utf-8" />
        <title>${title}</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="stylesheet" href="styles/root.css" />
      </head>
      <body>
        <main>
          ${content}
        </main>
      </body>
    </html>`
  );
};
