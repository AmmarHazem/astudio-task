import useAppDispatch from "@/hooks/useAppDispatch";
import useAppSelector from "@/hooks/useAppSelector";
import SearchPopover from "./SearchPopover";
import { fetchUsers, setSearchEmail } from "@/redux/usersSlice";
import { FC, useEffect } from "react";
import { useDebounce } from "use-debounce";

const UsersSearchEmailPopover: FC = () => {
  const dispatch = useAppDispatch();
  const { searchEmail } = useAppSelector((state) => state.users);
  const [debounceEmail] = useDebounce(searchEmail, 1000);
  const debounceLoading = searchEmail !== debounceEmail;

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch, debounceEmail]);

  return (
    <SearchPopover
      buttonText="Email"
      popoverTitle="Search users by email"
      loading={debounceLoading}
      value={searchEmail ?? ""}
      onChange={(value) => {
        dispatch(setSearchEmail(value));
      }}
    />
  );
};

export default UsersSearchEmailPopover;
