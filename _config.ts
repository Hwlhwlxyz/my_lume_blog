import lume from "lume/mod.ts";
import code_highlight from "lume/plugins/code_highlight.ts";
import date from "lume/plugins/date.ts";
import feed from "lume/plugins/feed.ts";
import jsx from "lume/plugins/jsx.ts";
import postcss from "lume/plugins/postcss.ts";
import { parse, stringify } from "https://deno.land/std@0.207.0/yaml/mod.ts";
import { walk } from "https://deno.land/std@0.207.0/fs/walk.ts";

const site = lume({
  src: "./src"
});

site.use(code_highlight());
site.use(date());
site.use(feed());
site.use(jsx());
site.use(postcss());
site.ignore("user_data_template");


site.remoteFile(
  "_includes/css/github-markdown.min.css",
  "https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/5.5.1/github-markdown-light.css"
)

let user_data_files = [];
for await (const dirEntry of walk("./user_data")) {
  console.log("Recursive walking:", dirEntry.name, dirEntry.path, `./src/${dirEntry.path}`);
  user_data_files.push(dirEntry.name);
  site.remoteFile(`./post/${dirEntry.name}`, import.meta.resolve(`./${dirEntry.path}`));
}

site.addEventListener("beforeBuild", async () => {
  console.log("The build is about to start");
  const text = await Deno.readTextFile("user_data/site.yml");
  console.log(text)
  const data: any = parse(text);
  site.data("blogHeadTitle", data.blogHeadTitle);
  site.data("head", data.head)
});

export default site;
