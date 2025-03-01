import useAppDispatch from "@/hooks/useAppDispatch";
import SelectLimit from "./SelectLimit";
import useAppSelector from "@/hooks/useAppSelector";
import { fetchProducts, setLimit } from "@/redux/productsSlice";
import { FC, useEffect } from "react";

const ProductsSelectLimit: FC = () => {
  const dispatch = useAppDispatch();
  const { limit } = useAppSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
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

export default ProductsSelectLimit;
