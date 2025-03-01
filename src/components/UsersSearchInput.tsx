import { FC } from "react";
import { setSearchText } from "@/redux/usersSlice";
import SearchInput from "./SearchInput";
import useAppSelector from "@/hooks/useAppSelector";
import useAppDispatch from "@/hooks/useAppDispatch";

const UsersSearchInput: FC = () => {
  const dispatch = useAppDispatch();
  const { searchText } = useAppSelector((state) => state.users);

  return (
    <SearchInput
      value={searchText}
      onChange={(value) => {
        dispatch(setSearchText(value));
      }}
    />
  );
};

export default UsersSearchInput;
