"use client";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { FC, useEffect, useState } from "react";
import { fetchProducts, setSelectedCategory } from "@/redux/productsSlice";
import useAppSelector from "@/hooks/useAppSelector";
import useAppDispatch from "@/hooks/useAppDispatch";

const ProductCategoriesSelect: FC = () => {
  const [open, setOpen] = useState(false);
  // const [value, setValue] = useState("");
  const dispatch = useAppDispatch();

  const { categories, selectedCategory } = useAppSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch, selectedCategory]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" role="combobox" aria-expanded={open} className="w-[200px] justify-between">
          {selectedCategory ? categories.find((cate) => cate.slug === selectedCategory)?.name : "Select category..."}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search category..." className="h-9" />
          <CommandList>
            <CommandEmpty>No categories found.</CommandEmpty>
            <CommandGroup>
              {categories.map((category) => (
                <CommandItem
                  key={category.slug}
                  value={category.slug}
                  onSelect={(currentValue) => {
                    if (currentValue === selectedCategory) {
                      dispatch(setSelectedCategory(undefined));
                    } else {
                      dispatch(setSelectedCategory(currentValue));
                    }
                    setOpen(false);
                  }}
                >
                  {category.name}
                  <Check className={cn("ml-auto", selectedCategory === category.slug ? "opacity-100" : "opacity-0")} />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default ProductCategoriesSelect;
