import { generatePaginationLink } from "../utility/generatePaginationLink.ts";

export const layout = "index-paginate.tsx";

export default function* ({ search, paginate }) {
  const posts = search.pages("layout=post.tsx", "date=desc");
  const options = {
    url: (n) => {
      return "/";
    },
  };
  for (const page of paginate(posts, options)) {
    yield page;
    break; // only generate the first page for home page
  }
}
