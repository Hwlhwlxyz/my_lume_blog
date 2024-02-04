import { generatePaginationLink } from "../utility/generatePaginationLink.ts";

export interface IPageData {
  url: string;
  results: any[];
  pagination: IPagination;
}

export interface IPagination {
  page: number;
  totalPages: number;
  totalResults: number;
  previous: string;
  next: any;
}

function isNumericString(value: string) {
  return /^\d+$/.test(value);
}

function getPageUrl(currentUrl: string, pageNumber: number) {
  return generatePaginationLink(pageNumber);
}

export default function ({ url, results, pagination }: IPageData) {
  const numArr = [];
  for (let i = 0; i < pagination.totalPages; i++) {
    numArr.push(i + 1);
  }
  return (
    <div className={"pagination"}>
      <li key={"pagination-prev"}>
        <a href={pagination.previous}>prev</a>
      </li>
      {numArr.map((n) => {
        if (pagination.page == n) {
          return (
            <li key={"pagination" + n.toString()}>
              <a className={"selected"} href={getPageUrl(url, n)}>
                {n}
              </a>
            </li>
          );
        } else {
          return (
            <li key={"pagination" + n.toString()}>
              <a href={getPageUrl(url, n)}>{n}</a>
            </li>
          );
        }
      })}
      <li key={"pagination-next"}>
        <a href={pagination.next}>next</a>
      </li>
    </div>
  );
}
