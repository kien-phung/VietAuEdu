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

interface ProgramFilterProps {
  openMenuFilters: boolean;
  setOpenMenuFilters: (open: boolean) => void;
  activeFilters: { status: string[] };
  toggleFilter: (value: string, type: "status") => void;
  clearFilters: () => void;
  applyFilters: () => void;
  closeMenuMenuFilters: () => void;
}

export const ProgramFilter = ({
  openMenuFilters,
  setOpenMenuFilters,
  activeFilters,
  toggleFilter,
  clearFilters,
  applyFilters,
  closeMenuMenuFilters,
}: ProgramFilterProps) => {
  return (
    <DropdownMenu open={openMenuFilters} onOpenChange={closeMenuMenuFilters}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="secondary"
          size="sm"
          className="h-8 gap-1 text-gray-800 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700"
          onClick={() => setOpenMenuFilters(!openMenuFilters)}
        >
          <Filter className="h-4 w-4 text-gray-700 dark:text-gray-300" />
          Filter
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="w-[250px] bg-white dark:bg-[#1e2735] border border-gray-200 dark:border-gray-700"
      >
        <DropdownMenuLabel className="text-gray-900 dark:text-gray-100">
          Filter by
        </DropdownMenuLabel>

        <DropdownMenuSeparator className="bg-gray-200 dark:bg-gray-600" />

        <div className="p-2">
          <h4 className="mb-2 text-sm font-medium text-gray-900 dark:text-gray-100">
            Status
          </h4>

          <div className="space-y-2">
            <div className="flex items-center">
              <Checkbox
                id="status-active"
                checked={activeFilters.status.includes("active")}
                onCheckedChange={() => toggleFilter("active", "status")}
                className="mr-2"
              />

              <label
                htmlFor="status-active"
                className="text-gray-900 dark:text-gray-100"
              >
                Active
              </label>
            </div>

            <div className="flex items-center">
              <Checkbox
                id="status-inactive"
                checked={activeFilters.status.includes("inactive")}
                onCheckedChange={() => toggleFilter("inactive", "status")}
                className="mr-2"
              />

              <label
                htmlFor="status-inactive"
                className="text-gray-900 dark:text-gray-100"
              >
                Inactive
              </label>
            </div>
          </div>
        </div>

        <DropdownMenuSeparator className="bg-gray-200 dark:bg-gray-600" />

        <div className="p-2 flex justify-between">
          <Button
            variant="outline"
            size="sm"
            onClick={clearFilters}
            className="text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            Clear Filters
          </Button>

          <Button
            size="sm"
            onClick={applyFilters}
            variant="secondary"
            className="text-gray-800 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            Apply Filters
          </Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
