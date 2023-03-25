import { html } from "html/mod.ts";

export default html`
  <script type="module">
    const runColorMode = (fn) => {
      if (!window.matchMedia) {
        return console.warn(
          "Your browser doesn't support media queries, website theme experience will be degredated"
        );
      }
      const query = window.matchMedia("(prefers-color-scheme: dark)");
      const handleRequestChange = (event) => fn(event.matches);
      query.addEventListener("change", handleRequestChange);
      fn(query.matches);

      document.addEventListener("beforeunload", () => {
        query.removeEventListener("change", handleRequestChange);
      }, { once: true });
    };

    runColorMode((darkMode) => {
      let theme = "light";
      if (darkMode) {
        theme = "dark";
      }

      const savedTheme = localStorage.getItem("data-theme");
      if (savedTheme) {
        theme = savedTheme;
      }

      document.firstElementChild.setAttribute("data-theme", theme);
    });
  </script>
`;
