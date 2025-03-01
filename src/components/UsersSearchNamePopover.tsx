import { FC, useEffect } from "react";
import { fetchUsers, setSearchName } from "@/redux/usersSlice";
import SearchPopover from "./SearchPopover";
import useAppSelector from "@/hooks/useAppSelector";
import useAppDispatch from "@/hooks/useAppDispatch";
import { useDebounce } from "use-debounce";

const UsersSearchNamePopover: FC = () => {
  const dispatch = useAppDispatch();
  const { searchName } = useAppSelector((state) => state.users);
  const [debounceName] = useDebounce(searchName, 1000);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch, debounceName]);

  return (
    <SearchPopover
      buttonText="Name"
      popoverTitle="Search users by name"
      value={searchName ?? ""}
      onChange={(value) => {
        dispatch(setSearchName(value));
      }}
    />
  );
};

export default UsersSearchNamePopover;
