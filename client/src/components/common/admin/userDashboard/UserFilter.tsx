"use client";

import { SharedFilter } from "@/components/common/admin/SharedFilter";
import { EUserStatus } from "@/utils/types/enum";

interface UserFilterProps {
  openMenuFilters: boolean;
  setOpenMenuFilters: (open: boolean) => void;
  activeFilters: { status: string[] };
  toggleFilter: (value: string, type: "status") => void;
  clearFilters: () => void;
  applyFilters: () => void;
  closeMenuMenuFilters: () => void;
}

export const UserFilter = ({
  openMenuFilters,
  setOpenMenuFilters,
  activeFilters,
  toggleFilter,
  clearFilters,
  applyFilters,
  closeMenuMenuFilters,
}: UserFilterProps) => {
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
      { label: "Active", value: "active" },
      { label: "Inactive", value: "inactive" },
      { label: "Pending", value: EUserStatus.PENDING },
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
