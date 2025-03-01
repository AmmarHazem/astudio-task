"use client";
import DataTable from "@/components/DataTable";
import UsersSearchInput from "@/components/UsersSearchInput";
import UsersSelectLimit from "@/components/UsersSelectLimit";
import useAppDispatch from "@/hooks/useAppDispatch";
import useAppSelector from "@/hooks/useAppSelector";
import { DataTableRowType } from "@/models/DataTableRowType";
import { fetchUsers } from "@/redux/usersSlice";
import { FC, useEffect, useMemo } from "react";

const UsersPage: FC = () => {
  const dispatch = useAppDispatch();
  const { loading, loadingError, users, searchText } = useAppSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const userRows = useMemo(() => {
    return users.map<DataTableRowType>((user) => {
      return [
        user.firstName,
        user.lastName,
        user.maidenName,
        user.age?.toString(),
        user.gender,
        user.email,
        user.username,
        user.bloodGroup,
        user.eyeColor,
      ];
    });
  }, [users]);

  const filteredUsers = useMemo(() => {
    if (!searchText) {
      return userRows;
    }
    const searchQuery = searchText.trim().toLocaleLowerCase();
    return userRows.filter((rowData) => {
      return rowData.some((cell) => cell?.toString().toLocaleLowerCase().includes(searchQuery));
    });
  }, [searchText, userRows]);

  return (
    <div className="w-full max-w-[1000px] p-2 mx-auto">
      <UsersSelectLimit />
      <UsersSearchInput />
      <DataTable
        headers={["First Name", "LastName", "Maiden Name", "Age", "Gender", "Email", "Username", "Bloodgroup", "Eyecolor"]}
        rows={filteredUsers}
      />
    </div>
  );
};

export default UsersPage;
