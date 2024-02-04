export default function* ({ search }) {
  const tags = search.values("tags");
  let currentIndex = 0;
  while (currentIndex < tags.length) {
    const currentTag = tags[currentIndex];
    const results = search.pages(currentTag);
    yield {
      layout: "tag-page.tsx",
      url: `/tag/${currentTag}/`,
      results,
      currentTag,
      pagination: {
        currentTag,
      },
    };

    // Increase the page number
    ++currentIndex;
  }
}
