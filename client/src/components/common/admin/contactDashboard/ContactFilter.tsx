import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Filter } from "lucide-react";

interface ContactFilterProps {
  openMenuFilters: boolean;
  setOpenMenuFilters: (open: boolean) => void;
  activeFilters: { status: string[] };
  toggleFilter: (value: string) => void;
  clearFilters: () => void;
  applyFilters: () => void;
  closeMenuMenuFilters: () => void;
}

export const ContactFilter = ({
  openMenuFilters,
  setOpenMenuFilters,
  activeFilters,
  toggleFilter,
  clearFilters,
  applyFilters,
  closeMenuMenuFilters,
}: ContactFilterProps) => {
  return (
    <DropdownMenu open={openMenuFilters} onOpenChange={closeMenuMenuFilters}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="h-8 gap-1"
          onClick={() => setOpenMenuFilters(!openMenuFilters)}
        >
          <Filter className="h-4 w-4" />
          Filter
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-[250px] bg-[#1e2735]">
        <DropdownMenuLabel>Filter by</DropdownMenuLabel>

        <DropdownMenuSeparator />

        <div className="p-2">
          <h4 className="mb-2 text-sm font-medium">Status</h4>

          <div className="space-y-2">
            <div className="flex items-center">
              <Checkbox
                id="status-resolved"
                checked={activeFilters.status.includes("resolved")}
                onCheckedChange={() => toggleFilter("resolved")}
                className="mr-2"
              />

              <label htmlFor="status-resolved">Resolved</label>
            </div>

            <div className="flex items-center">
              <Checkbox
                id="status-pending"
                checked={activeFilters.status.includes("pending")}
                onCheckedChange={() => toggleFilter("pending")}
                className="mr-2"
              />

              <label htmlFor="status-pending">Pending</label>
            </div>
          </div>
        </div>

        <DropdownMenuSeparator />

        <div className="p-2 flex justify-between">
          <Button variant="outline" size="sm" onClick={clearFilters}>
            Clear Filters
          </Button>

          <Button size="sm" onClick={applyFilters}>
            Apply Filters
          </Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
