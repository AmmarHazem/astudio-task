import { FC, useEffect } from "react";
import { fetchUsers, setLimit } from "@/redux/usersSlice";
import SelectLimit from "./SelectLimit";
import useAppSelector from "@/hooks/useAppSelector";
import useAppDispatch from "@/hooks/useAppDispatch";

const UsersSelectLimit: FC = () => {
  const dispatch = useAppDispatch();
  const { limit } = useAppSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch, limit]);

  return (
    <>
      <SelectLimit
        value={limit}
        onChange={(value) => {
          dispatch(setLimit(value));
        }}
      />
      <span>Entries</span>
    </>
  );
};

export default UsersSelectLimit;
