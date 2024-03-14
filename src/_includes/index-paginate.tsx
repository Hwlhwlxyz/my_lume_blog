export interface IPageData {
  url: string;
  results: IResult[];
  pagination: IPagination;
  comp: any;
  search: any;
  blogHeadTitle: string;
  summaryLength: number;
}

export interface IResult {
  basename: string;
  tags: Array<string>;
  layout: string;
  title: string;
  date: Date;
  content: string;
  url: string;
  page: {
    src: {
      path: string;
      ext: string;
      asset: boolean;
    };
  };
}

export interface IPagination {
  page: number;
  totalPages: number;
  totalResults: number;
  previous: string;
  next: any;
}

export const layout = "base.vto";

export default ({
  url,
  results,
  pagination,
  search,
  comp,
  blogHeadTitle,
  summaryLength,
}: IPageData) => {
  console.log("summaryLength", summaryLength);
  return (
    <div style={{ display: "flex" }}>
      <div className="container">
        <head>
          <link rel="stylesheet" href="/styles.css"></link>
        </head>
        <div>
          <div>
            <div>
              {results.map((r) => {
                console.log(r)
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
          <comp.paginationBar
            url={url}
            results={results}
            pagination={pagination}
          />
        </div>
      </div>
    </div>
  );
};
