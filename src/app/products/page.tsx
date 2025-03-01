"use client";
import Breadcrumbs from "@/components/Breadcrumbs";
import DataTable from "@/components/DataTable";
import ProductCategoriesSelect from "@/components/ProductCategoriesSelect";
import ProductsPagination from "@/components/ProductsPagination";
import ProductsSearchInput from "@/components/ProductsSearchInput";
import ProductsSelectLimit from "@/components/ProductsSelectLimit";
import useAppDispatch from "@/hooks/useAppDispatch";
import useAppSelector from "@/hooks/useAppSelector";
import { DataTableRowType } from "@/models/DataTableRowType";
import { fetchProductCategories, fetchProducts } from "@/redux/productsSlice";
import { FC, useEffect, useMemo } from "react";

const ProductsPage: FC = () => {
  const dispatch = useAppDispatch();
  const { products, loading, loadingError, limit, currentPage } = useAppSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchProductCategories());
  }, [dispatch, currentPage, limit]);

  const productRows = useMemo(() => {
    return products.map<DataTableRowType>((products) => {
      return [
        products.title,
        products.category,
        products.brand,
        products.price?.toLocaleString(),
        products.rating?.toString(),
        products.availabilityStatus,
        products.returnPolicy,
      ];
    });
  }, [products]);

  return (
    <div className="bg-gradient-to-b from-background to-muted min-h-screen">
      <div className="w-full max-w-[1500px] p-2 mx-auto pt-10">
        <Breadcrumbs
          routes={[
            { href: "/", name: "Home" },
            { href: "/products", name: "Products" },
          ]}
        />
        <div className="flex gap-2 items-center mb-10">
          <ProductsSelectLimit />
          <div className="w-[1px] bg-gray-200 h-[30px]" />
          <ProductsSearchInput />
          <ProductCategoriesSelect />
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
              headers={["Title", "Category", "Brand", "Price", "Rating", "Availability Status", "Return Policy"]}
              rows={productRows}
            />
          )}
        </div>
        <ProductsPagination />
      </div>
    </div>
  );
};

export default ProductsPage;
