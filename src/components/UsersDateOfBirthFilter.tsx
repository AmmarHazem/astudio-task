import { FC, useEffect, useState } from "react";
import { fetchUsers, setSearchDateOfBirth } from "@/redux/usersSlice";
import { format, parse } from "date-fns";
import DatePicker from "./DatePicker";
import useAppSelector from "@/hooks/useAppSelector";
import useAppDispatch from "@/hooks/useAppDispatch";

const UsersDateOfBirthFilter: FC = () => {
  const dispatch = useAppDispatch();
  const { searchDateOfBirth } = useAppSelector((state) => state.users);
  const [openPopover, setOpenPopover] = useState(false);

  useEffect(() => {
    dispatch(fetchUsers());
    setOpenPopover(false);
  }, [dispatch, searchDateOfBirth]);

  return (
    <DatePicker
      open={openPopover}
      placeholder="Select Date of Birth"
      onOpenChanged={setOpenPopover}
      value={searchDateOfBirth ? parse(searchDateOfBirth, "yyyy-MM-dd", new Date()) : undefined}
      onChange={(value) => {
        if (value) {
          dispatch(setSearchDateOfBirth(format(value, "yyyy-MM-dd")));
        } else {
          dispatch(setSearchDateOfBirth(undefined));
        }
      }}
    />
  );
};

export default UsersDateOfBirthFilter;
