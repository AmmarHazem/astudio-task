"use client";
import DataTable from "@/components/DataTable";
import SelectGender from "@/components/SelectGender";
import UsersDateOfBirthFilter from "@/components/UsersDateOfBirthFilter";
import UsersSearchEmailPopover from "@/components/UsersSearchEmailPopover";
import UsersSearchInput from "@/components/UsersSearchInput";
import UsersSearchNamePopover from "@/components/UsersSearchNamePopover";
import UsersSelectLimit from "@/components/UsersSelectLimit";
import UsersPagination from "@/components/UsersPagination";
import useAppDispatch from "@/hooks/useAppDispatch";
import useAppSelector from "@/hooks/useAppSelector";
import Breadcrumbs from "@/components/Breadcrumbs";
import { DataTableRowType } from "@/models/DataTableRowType";
import { fetchUsers } from "@/redux/usersSlice";
import { FC, useEffect, useMemo } from "react";

const UsersPage: FC = () => {
  const dispatch = useAppDispatch();
  const { loading, loadingError, users, searchText, limit, currentPage } = useAppSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch, currentPage, limit]);

  const userRows = useMemo(() => {
    return users.map<DataTableRowType>((user) => {
      return [
        user.firstName,
        user.lastName,
        user.maidenName,
        user.age?.toString(),
        user.birthDate,
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
    <div className="bg-gradient-to-b from-background to-muted min-h-screen">
      <div className="w-full max-w-[1500px] p-2 mx-auto pt-10">
        <Breadcrumbs
          routes={[
            { href: "/", name: "Home" },
            { href: "/users", name: "Users" },
          ]}
        />
        <div className="flex gap-2 items-center mb-10">
          <UsersSelectLimit />
          <div className="w-[1px] bg-gray-200 h-[30px]" />
          <UsersSearchInput />
          <div className="w-[1px] bg-gray-200 h-[30px]" />
          <UsersSearchNamePopover />
          <UsersSearchEmailPopover />
          <UsersDateOfBirthFilter />
          <SelectGender />
        </div>
        <div className="min-h-[200px] mb-10">
          {loading ? (
            <div className="flex justify-center items-center min-h-[200px]">
              <div className="animate-[spin_0.5s_linear_infinite] rounded-full h-12 w-12 border-4 border-primary border-t-transparent" />
            </div>
          ) : loadingError ? (
            <div className="flex justify-center items-center min-h-[200px]">
              <div className="text-red-500 text-center">
                <p className="text-lg font-semibold mb-2">Error loading users</p>
                <p className="text-sm">{loadingError}</p>
              </div>
            </div>
          ) : (
            <DataTable
              headers={[
                "First Name",
                "LastName",
                "Maiden Name",
                "Age",
                "Date Of Birth",
                "Gender",
                "Email",
                "Username",
                "Bloodgroup",
                "Eyecolor",
              ]}
              rows={filteredUsers}
            />
          )}
        </div>
        <UsersPagination />
      </div>
    </div>
  );
};

export default UsersPage;
