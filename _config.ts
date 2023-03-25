import lume from "lume/mod.ts";
import jsx from "lume/plugins/jsx_preact.ts";

const search = { returnPageData: true };
const site = lume({}, { search });

site
  .copy("styles")
  .use(jsx());

export default site;
