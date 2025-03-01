import useAppDispatch from "@/hooks/useAppDispatch";
import useAppSelector from "@/hooks/useAppSelector";
import { fetchUsers, setSearchGender } from "@/redux/usersSlice";
import { FC, useEffect } from "react";

const SelectGender: FC = () => {
  const dispatch = useAppDispatch();
  const { searchGender } = useAppSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch, searchGender]);

  return (
    <select
      value={searchGender ?? ""}
      onChange={(e) => {
        if (e.target.value) {
          dispatch(setSearchGender(e.target.value));
        } else {
          dispatch(setSearchGender(undefined));
        }
      }}
    >
      <option value={""}>Gender</option>
      <option value={"male"}>Male</option>
      <option value={"female"}>Female</option>
    </select>
  );
};

export default SelectGender;
