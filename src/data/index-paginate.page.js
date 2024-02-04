import { generatePaginationLink } from "../utility/generatePaginationLink.ts";

export const layout = "index-paginate.tsx";

export default function* ({ search, paginate }) {
  const posts = search.pages("layout=post.tsx", "date=desc");
  const options = {
    url: (n) => generatePaginationLink(n),
    size: 10,
  };
  for (const page of paginate(posts, options)) {
    yield page;
  }
}
