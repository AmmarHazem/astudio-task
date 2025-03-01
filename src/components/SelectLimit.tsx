import { FC } from "react";

const SelectLimit: FC<SelectLimitProps> = ({ onChange, value }) => {
  return (
    <select
      value={value}
      onChange={(e) => {
        onChange(parseInt(e.target.value));
      }}
    >
      <option value={5}>5</option>
      <option value={10}>10</option>
      <option value={20}>20</option>
      <option value={50}>50</option>
    </select>
  );
};

interface SelectLimitProps {
  value: number;
  onChange: (value: number) => void;
}

export default SelectLimit;
