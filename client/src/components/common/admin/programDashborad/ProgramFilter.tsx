"use client";

import { SharedFilter } from "@/components/common/admin/SharedFilter";
import { EStatus } from "@/utils/types/enum";

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
  // Create a wrapper function to match the expected signature
  const handleToggleFilter = (
    value: string,
    type: "status" | "contentType"
  ) => {
    if (type === "status") {
      toggleFilter(value, "status");
    }
  };

  const filterOptions = {
    status: [
      { label: "Active", value: EStatus.ACTIVE },
      { label: "Inactive", value: EStatus.INACTIVE },
    ],
  };

  return (
    <SharedFilter
      openMenuFilters={openMenuFilters}
      setOpenMenuFilters={setOpenMenuFilters}
      activeFilters={activeFilters}
      toggleFilter={handleToggleFilter}
      clearFilters={clearFilters}
      applyFilters={applyFilters}
      closeMenuMenuFilters={closeMenuMenuFilters}
      filterOptions={filterOptions}
    />
  );
};
