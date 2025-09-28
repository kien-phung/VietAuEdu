import { SharedFilter } from "@/components/common/admin/SharedFilter";

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
  const filterOptions = {
    status: [
      { label: "Active", value: "active" },
      { label: "Inactive", value: "inactive" },
    ],
    contentType: [
      { label: "Full Time", value: "full-time" },
      { label: "Part Time", value: "part-time" },
      { label: "Contract", value: "contract" },
      { label: "Internship", value: "internship" },
    ],
  };

  return (
    <SharedFilter
      openMenuFilters={openMenuFilters}
      setOpenMenuFilters={setOpenMenuFilters}
      activeFilters={activeFilters}
      toggleFilter={toggleFilter}
      clearFilters={clearFilters}
      applyFilters={applyFilters}
      closeMenuMenuFilters={closeMenuMenuFilters}
      filterOptions={filterOptions}
    />
  );
};
