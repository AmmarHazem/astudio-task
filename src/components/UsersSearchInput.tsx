import { FC, useState } from "react";
import { setSearchText } from "@/redux/usersSlice";
import { Button } from "./ui/button";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";
import SearchInput from "./SearchInput";
import useAppSelector from "@/hooks/useAppSelector";
import useAppDispatch from "@/hooks/useAppDispatch";

const UsersSearchInput: FC = () => {
  const dispatch = useAppDispatch();
  const { searchText } = useAppSelector((state) => state.users);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex">
      <div className={cn(`overflow-hidden transition-all duration-300`, isOpen ? "w-[150px]" : "w-0")}>
        <SearchInput
          placeholder="Search users"
          value={searchText}
          onChange={(value) => {
            dispatch(setSearchText(value));
          }}
        />
      </div>
      <Button variant="outline" className={cn(isOpen ? "ml-2" : "ml-0")} size="icon" onClick={() => setIsOpen(!isOpen)}>
        <Search />
      </Button>
    </div>
  );
};

export default UsersSearchInput;
