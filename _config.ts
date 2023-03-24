import lume from "lume/mod.ts";

const search = { returnPageData: true };
const site = lume({}, { search });

site.copy("styles");

export default site;
