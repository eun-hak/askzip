interface ArticleTableProps {
  headers: string[];
  rows: string[][];
}

export default function ArticleTable({ headers, rows }: ArticleTableProps) {
  return (
    <div className="w-full overflow-x-auto rounded-lg border border-site-border">
      <table className="w-full min-w-[280px] border-collapse text-[14px]">
        <caption className="sr-only">표 정보</caption>
        <thead>
          <tr className="bg-surface">
            {headers.map((h, i) => (
              <th
                key={i}
                scope="col"
                className="text-left px-4 py-3 text-primary font-semibold border-b border-site-border text-[13px] whitespace-nowrap"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr
              key={ri}
              className="border-t border-site-border hover:bg-surface/50 transition-colors"
            >
              {row.map((cell, ci) => (
                <td
                  key={ci}
                  className={`px-4 py-3 leading-relaxed align-top ${
                    ci === 0 ? 'text-primary font-medium whitespace-nowrap' : 'text-secondary'
                  }`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
