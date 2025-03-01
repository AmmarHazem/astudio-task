import { FC } from "react";
import { DataTableRowType } from "@/models/DataTableRowType";
import DataTableRow from "./DataTableRow";

const DataTable: FC<DataTableProps> = ({ headers, rows }) => {
  return (
    <table className="w-full border-2 border-[#ebebeb] bg-white">
      <thead className="bg-[#c0e3e5] uppercase text-left">
        <tr>
          {headers.map((header) => {
            return (
              <th className="py-4 px-2 border-r-2 border-[#ebebeb]" key={header}>
                {header}
              </th>
            );
          })}
        </tr>
      </thead>
      {rows.length > 0 ? (
        <tbody>
          {rows.map((row) => {
            return <DataTableRow data={row} key={row.join("")} />;
          })}
        </tbody>
      ) : (
        <tbody>
          <tr>
            <td colSpan={headers.length} className="text-center py-4">
              No data found
            </td>
          </tr>
        </tbody>
      )}
    </table>
  );
};

interface DataTableProps {
  headers: string[];
  rows: DataTableRowType[];
}

export default DataTable;
