import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Filter } from "lucide-react";

interface JobFilterProps {
  openMenuFilters: boolean;
  setOpenMenuFilters: (open: boolean) => void;
  activeFilters: { status: string[]; contentType: string[] };
  toggleFilter: (value: string, type: "status" | "contentType") => void;
  clearFilters: () => void;
  applyFilters: () => void;
  closeMenuMenuFilters: () => void;
}

export const JobFilter = ({
  openMenuFilters,
  setOpenMenuFilters,
  activeFilters,
  toggleFilter,
  clearFilters,
  applyFilters,
  closeMenuMenuFilters,
}: JobFilterProps) => {
  return (
    <DropdownMenu open={openMenuFilters} onOpenChange={closeMenuMenuFilters}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="h-8 gap-1 bg-[#1877F2] hover:bg-[#166FE5] text-white"
          onClick={() => setOpenMenuFilters(!openMenuFilters)}
        >
          <Filter className="h-4 w-4" />
          Filter
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-[250px]">
        <DropdownMenuLabel>Filter by</DropdownMenuLabel>

        <DropdownMenuSeparator />

        <div className="p-2">
          <h4 className="mb-2 text-sm font-medium">Status</h4>

          <div className="space-y-2">
            <div className="flex items-center">
              <Checkbox
                id="status-active"
                checked={activeFilters.status.includes("active") || false}
                onCheckedChange={() => toggleFilter("active", "status")}
                className="mr-2"
              />

              <label htmlFor="status-active">Active</label>
            </div>

            <div className="flex items-center">
              <Checkbox
                id="status-inactive"
                checked={activeFilters.status.includes("inactive") || false}
                onCheckedChange={() => toggleFilter("inactive", "status")}
                className="mr-2"
              />

              <label htmlFor="status-inactive">Inactive</label>
            </div>
          </div>
        </div>

        <DropdownMenuSeparator />

        <div className="p-2">
          <h4 className="mb-2 text-sm font-medium">Work Type</h4>

          <div className="space-y-2">
            <div className="flex items-center">
              <Checkbox
                id="type-full-time"
                checked={
                  activeFilters.contentType?.includes("full-time") || false
                }
                onCheckedChange={() => toggleFilter("full-time", "contentType")}
                className="mr-2"
              />

              <label htmlFor="type-full-time">Full Time</label>
            </div>

            <div className="flex items-center">
              <Checkbox
                id="type-part-time"
                checked={
                  activeFilters.contentType?.includes("part-time") || false
                }
                onCheckedChange={() => toggleFilter("part-time", "contentType")}
                className="mr-2"
              />

              <label htmlFor="type-part-time">Part Time</label>
            </div>

            <div className="flex items-center">
              <Checkbox
                id="type-contract"
                checked={
                  activeFilters.contentType?.includes("contract") || false
                }
                onCheckedChange={() => toggleFilter("contract", "contentType")}
                className="mr-2"
              />

              <label htmlFor="type-contract">Contract</label>
            </div>

            <div className="flex items-center">
              <Checkbox
                id="type-internship"
                checked={
                  activeFilters.contentType?.includes("internship") || false
                }
                onCheckedChange={() =>
                  toggleFilter("internship", "contentType")
                }
                className="mr-2"
              />

              <label htmlFor="type-internship">Internship</label>
            </div>
          </div>
        </div>

        <DropdownMenuSeparator />

        <div className="p-2 flex justify-between">
          <Button variant="outline" size="sm" onClick={clearFilters}>
            Clear Filters
          </Button>

          <Button
            size="sm"
            onClick={applyFilters}
            className="bg-[#1877F2] hover:bg-[#166FE5] text-white"
          >
            Apply Filters
          </Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
