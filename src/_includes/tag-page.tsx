type ITagPageData = {
  url: string;
  results: any[];
  currentTag: string;
  pagination: {
    currentTag: string;
  };
  comp: any;
  summaryLength: number;
};

export const layout = "base.vto";

export default ({
  url,
  results,
  currentTag,
  pagination,
  comp,
  summaryLength,
}: ITagPageData) => {
  return (
    <div className={"container"} style={{ width: "100%" }}>
      <div style={{ textAlign: "center" }}>
        <h2>{currentTag}</h2>
      </div>

      <div>
        <div>
          {results.map((r) => {
            return (
              <div>
                <h2>
                  <a href={r.url}>
                    <div>{r.title}</div>
                  </a>
                </h2>

                <div className={"postStyles.dateStyle"}>
                  {r.date.toLocaleDateString()}
                </div>
                <p>
                  {r.content?.slice(0, summaryLength ? summaryLength : 100)}
                </p>
                <div>
                  <comp.TagBlock tags={r.tags} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
