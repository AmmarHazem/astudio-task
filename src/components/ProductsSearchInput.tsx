import useAppDispatch from "@/hooks/useAppDispatch";
import SearchInput from "./SearchInput";
import useAppSelector from "@/hooks/useAppSelector";
import { cn } from "@/lib/utils";
import { FC, useEffect, useState } from "react";
import { fetchProducts, setSearchText } from "@/redux/productsSlice";
import { Loader2, Search } from "lucide-react";
import { Button } from "./ui/button";
import { useDebounce } from "use-debounce";

const ProductsSearchInput: FC = () => {
  const dispatch = useAppDispatch();
  const { searchText } = useAppSelector((state) => state.products);
  const [isOpen, setIsOpen] = useState(false);
  const [debouncedSearchText] = useDebounce(searchText, 1000);
  const debounceLoading = searchText !== debouncedSearchText;

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch, debouncedSearchText]);

  return (
    <div className="flex">
      <div className={cn(`overflow-hidden transition-all duration-300`, isOpen ? "w-[200px]" : "w-0")}>
        <SearchInput
          className="w-[200px]"
          placeholder="Search products"
          value={searchText}
          onChange={(value) => {
            dispatch(setSearchText(value));
          }}
        />
      </div>
      <Button variant="outline" className={cn(isOpen ? "ml-2" : "ml-0")} size="icon" onClick={() => setIsOpen(!isOpen)}>
        {debounceLoading ? <Loader2 className="animate-spin" /> : <Search />}
      </Button>
    </div>
  );
};

export default ProductsSearchInput;
