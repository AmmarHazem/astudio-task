import { FC } from "react";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";

const SearchInput: FC<SearchInputProps> = ({ onChange, className, value, placeholder = "Search" }) => {
  return (
    <Input
      className={cn("w-[150px]", className)}
      type="search"
      placeholder={placeholder}
      value={value}
      onChange={(e) => {
        onChange(e.target.value);
      }}
    />
  );
};

interface SearchInputProps {
  value: string;
  className?: string;
  placeholder?: string;
  onChange: (value: string) => void;
}

export default SearchInput;
