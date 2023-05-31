import React from "react";
import { problems } from "@/Data/Data";
import { cw } from "@/utils/helpers";

const ProblemsTable = () => {
  const headerData: Array<string> = [
    "Status",
    "Title",
    "Difficulty",
    "Category",
    "Solution",
  ];

  return (
    <table className="max-w-4xl mx-auto mt-6 w-full">
      <thead>
        <tr className="text-gray-600 uppercase text-sm w-full border-b border-gray-600">
          {headerData.map((data, i) => (
            <th key={i} className="pb-3 text-start">
              {data}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {problems.map(
          ({ category, difficulty, id, order, title, videoId }, idx) => (
            <tr
              className={cw(
                "text-slate-50 text-sm font-normal h-14",
                idx % 2 === 0 ? "bg-transparent" : "bg-[#282828]"
              )}
              key={id}
            >
              <td />
              <td>
                {order}. {title}
              </td>
              <td
                className={cw(
                  difficulty === "Easy"
                    ? "text-green-500"
                    : difficulty === "Medium"
                    ? "text-yellow-500"
                    : "text-red-500"
                )}
              >
                {difficulty}
              </td>
              <td>{category}</td>
              <td>{videoId ? "" : "Coming Soon"}</td>
            </tr>
          )
        )}
      </tbody>
    </table>
  );
};

export default ProblemsTable;
