import { FC } from "react";

const SearchInput: FC<SearchInputProps> = ({ onChange, value }) => {
  return (
    <input
      className="border border-gray-300 rounded-md px-4"
      type="search"
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
