export const layout = "base.vto";
export default function (data: Lume.Data, helpers: Lume.Helpers) {
  let { title, content, tags, children, comp, search } = data;
  const tagArray = search.values("tags");
  return (
    <div className={"container"} style={{ width: "100%" }}>
      <div>
        <div>
          <h1>{title}</h1>
          <article className="markdown-body">{children}</article>

          <hr></hr>
        </div>
        <comp.TagBlock tags={tags} />
      </div>
    </div>
  );
}
