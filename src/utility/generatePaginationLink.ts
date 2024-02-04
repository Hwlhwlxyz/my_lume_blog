export function generatePaginationLink(n: number) {
  if (n == 1) return `/posts/`;
  else {
    return `/posts/${n}/`;
  }
}