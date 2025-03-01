import { FC } from "react";
import { Input } from "./ui/input";

const SearchInput: FC<SearchInputProps> = ({ onChange, value }) => {
  return (
    <Input
      className="w-[150px] h-[30px]"
      type="search"
      placeholder="Search"
      value={value}
      onChange={(e) => {
        onChange(e.target.value);
      }}
    />
  );
};

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
}

export default SearchInput;
