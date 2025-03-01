import { DataTableRowType } from "@/models/DataTableRowType";
import { FC } from "react";

const DataTableRow: FC<DataTableRowProps> = ({ data }) => {
  return (
    <tr key={data.join("")} className="hover:bg-[#ebebeb]">
      {data.map((cell) => {
        return (
          <td key={cell} className="py-4 px-2 border-2 border-[#ebebeb]">
            {cell}
          </td>
        );
      })}
    </tr>
  );
};

interface DataTableRowProps {
  data: DataTableRowType;
}

export default DataTableRow;
