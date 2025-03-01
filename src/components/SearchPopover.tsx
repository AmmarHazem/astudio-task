import { FC, useState } from "react";
import { ChevronDown, Loader2, Search } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

const SearchPopover: FC<SearchPopoverProps> = ({ onChange, buttonText, loading, popoverTitle, value }) => {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={(value) => setOpen(value)}>
      <PopoverTrigger asChild>
        <Button variant="outline">
          {buttonText} <ChevronDown />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">{popoverTitle}</h4>
          </div>
          <div className="flex gap-2">
            <Label htmlFor="width" className="hidden">
              Search users by name
            </Label>
            <Input
              id="width"
              className="col-span-4 h-8"
              type="search"
              value={value}
              onChange={(e) => {
                onChange(e.target.value);
              }}
            />
            <Button variant="outline" size="icon" className="h-8" onClick={() => setOpen(false)}>
              {loading ? <Loader2 className="animate-spin" /> : <Search />}
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

interface SearchPopoverProps {
  value: string;
  buttonText: string;
  popoverTitle: string;
  loading: boolean;
  onChange: (value: string) => void;
}

export default SearchPopover;
