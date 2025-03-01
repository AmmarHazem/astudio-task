import { DataTableRowType } from "@/models/DataTableRowType";
import { FC } from "react";

const DataTableRow: FC<DataTableRowProps> = ({ data }) => {
  return (
    <tr key={data.join("")}>
      {data.map((cell) => {
        return <td key={cell}>{cell}</td>;
      })}
    </tr>
  );
};

interface DataTableRowProps {
  data: DataTableRowType;
}

export default DataTableRow;
