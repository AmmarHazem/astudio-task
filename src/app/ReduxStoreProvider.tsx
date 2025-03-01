"use client";
import { FC } from "react";
import { Provider } from "react-redux";
import store from "../redux/store";

const ReduxStoreProvider: FC<ReduxStoreProviderProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

interface ReduxStoreProviderProps {
  children: React.ReactNode;
}

export default ReduxStoreProvider;
