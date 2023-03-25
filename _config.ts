import lume from "lume/mod.ts";
import jsx from "lume/plugins/jsx_preact.ts";
import sitemap from "lume/plugins/sitemap.ts";

const search = { returnPageData: true };
const site = lume({}, { search });

site
  .copy("styles")
  .use(jsx())
  .use(sitemap({query:"draft!=true"}))

export default site;
