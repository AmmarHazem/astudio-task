import { FC } from "react";
import DataTableRow from "./DataTableRow";
import { DataTableRowType } from "@/models/DataTableRowType";

const DataTable: FC<DataTableProps> = ({ headers, rows }) => {
  return (
    <table>
      <thead>
        <tr>
          {headers.map((header) => {
            return <th key={header}>{header}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => {
          return <DataTableRow data={row} key={row.join("")} />;
        })}
      </tbody>
    </table>
  );
};

interface DataTableProps {
  headers: string[];
  rows: DataTableRowType[];
}

export default DataTable;
