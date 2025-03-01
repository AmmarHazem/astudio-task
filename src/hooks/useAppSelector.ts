import { RootState } from "@/redux/RootState";
import { useSelector } from "react-redux";

const useAppSelector = useSelector.withTypes<RootState>();

export default useAppSelector;
