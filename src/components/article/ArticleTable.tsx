interface ArticleTableProps {
  headers: string[];
  rows: string[][];
}

export default function ArticleTable({ headers, rows }: ArticleTableProps) {
  return (
    <>
      {/* 데스크탑: 일반 표 */}
      <div className="hidden sm:block w-full overflow-x-auto rounded-lg border border-site-border">
        <table className="w-full border-collapse text-[14px]">
          <thead>
            <tr className="bg-surface">
              {headers.map((h, i) => (
                <th
                  key={i}
                  className="text-left px-4 py-3 text-primary font-semibold border-b border-site-border text-[13px] whitespace-nowrap"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, ri) => (
              <tr key={ri} className="border-t border-site-border hover:bg-surface/50 transition-colors">
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

      {/* 모바일: 카드형 */}
      <div className="sm:hidden flex flex-col gap-3">
        {rows.map((row, ri) => (
          <div key={ri} className="rounded-lg border border-site-border overflow-hidden">
            {headers.map((header, ci) => (
              <div
                key={ci}
                className={`flex gap-0 ${ci < headers.length - 1 ? 'border-b border-site-border' : ''}`}
              >
                <span className="bg-surface px-3 py-2.5 text-[12px] font-semibold text-primary min-w-[80px] w-[80px] shrink-0 leading-snug flex items-start pt-3">
                  {header}
                </span>
                <span className="px-3 py-2.5 text-[13px] text-secondary leading-relaxed">
                  {row[ci] ?? ''}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
