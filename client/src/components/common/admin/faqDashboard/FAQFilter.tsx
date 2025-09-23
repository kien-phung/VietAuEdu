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

interface FAQFilterProps {
  openMenuFilters: boolean;
  setOpenMenuFilters: (open: boolean) => void;
  activeFilters: { status: string[]; contentType: string[] };
  toggleFilter: (value: string, type: "status" | "contentType") => void;
  clearFilters: () => void;
  applyFilters: () => void;
  closeMenuMenuFilters: () => void;
}

export const FAQFilter = ({
  openMenuFilters,
  setOpenMenuFilters,
  activeFilters,
  toggleFilter,
  clearFilters,
  applyFilters,
  closeMenuMenuFilters,
}: FAQFilterProps) => {
  return (
    <DropdownMenu open={openMenuFilters} onOpenChange={closeMenuMenuFilters}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="secondary"
          size="sm"
          className="h-8 gap-1"
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
          <h4 className="mb-2 text-sm font-medium">Category</h4>

          <div className="space-y-2">
            <div className="flex items-center">
              <Checkbox
                id="category-profile"
                checked={
                  activeFilters.contentType?.includes("Hồ sơ du học") || false
                }
                onCheckedChange={() =>
                  toggleFilter("Hồ sơ du học", "contentType")
                }
                className="mr-2"
              />

              <label htmlFor="category-profile">Hồ sơ du học</label>
            </div>

            <div className="flex items-center">
              <Checkbox
                id="category-cost"
                checked={
                  activeFilters.contentType?.includes("Chi phí") || false
                }
                onCheckedChange={() => toggleFilter("Chi phí", "contentType")}
                className="mr-2"
              />

              <label htmlFor="category-cost">Chi phí</label>
            </div>

            <div className="flex items-center">
              <Checkbox
                id="category-visa"
                checked={activeFilters.contentType?.includes("Visa") || false}
                onCheckedChange={() => toggleFilter("Visa", "contentType")}
                className="mr-2"
              />

              <label htmlFor="category-visa">Visa</label>
            </div>

            <div className="flex items-center">
              <Checkbox
                id="category-language"
                checked={
                  activeFilters.contentType?.includes("Ngôn ngữ") || false
                }
                onCheckedChange={() => toggleFilter("Ngôn ngữ", "contentType")}
                className="mr-2"
              />

              <label htmlFor="category-language">Ngôn ngữ</label>
            </div>

            <div className="flex items-center">
              <Checkbox
                id="category-immigration"
                checked={
                  activeFilters.contentType?.includes("Định cư") || false
                }
                onCheckedChange={() => toggleFilter("Định cư", "contentType")}
                className="mr-2"
              />

              <label htmlFor="category-immigration">Định cư</label>
            </div>

            <div className="flex items-center">
              <Checkbox
                id="category-service"
                checked={
                  activeFilters.contentType?.includes("Dịch vụ") || false
                }
                onCheckedChange={() => toggleFilter("Dịch vụ", "contentType")}
                className="mr-2"
              />

              <label htmlFor="category-service">Dịch vụ</label>
            </div>
          </div>
        </div>

        <DropdownMenuSeparator />

        <div className="p-2 flex justify-between">
          <Button variant="outline" size="sm" onClick={clearFilters}>
            Clear Filters
          </Button>

          <Button size="sm" onClick={applyFilters} variant="secondary">
            Apply Filters
          </Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
