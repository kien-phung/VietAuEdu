"use client";
import { useCallback, useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Plus, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import UpdateJobDialog from "@/components/common/admin/jobDashboard/UpdateJobDialog";
import CreateJobDialog from "@/components/common/admin/jobDashboard/CreateJobDialog";
import { JobFilter } from "@/components/common/admin/jobDashboard/JobFilter";
import { JobTable } from "@/components/common/admin/jobDashboard/JobTable";
import { TableSearch } from "@/components/common/admin/TableSearch";
import { useJobStore } from "@/utils/stores/jobStore";

const initialFilters = { status: [] as string[], contentType: [] as string[] };

export default function JobDashboardPage() {
  const { isLoading, getAllJobs, updateJob, createJob } = useJobStore();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");
  const query = searchParams.get("query") || "";
  const queryString = searchParams.toString();

  const [isCreateJobOpen, setIsCreateJobOpen] = useState(false);
  const [isUpdateJobOpen, setIsUpdateJobOpen] = useState(false);

  const [activeFilters, setActiveFilters] = useState(initialFilters);
  const [Jobs, setJobs] = useState<IJob[] | []>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getAllJobs();

      const data = res?.data?.jobs;

      setJobs(data || []);
    };

    fetchData();
  }, [query, queryString, searchParams, getAllJobs]);

  const handleSearch = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      const params = new URLSearchParams(searchParams);

      if (searchQuery.trim()) {
        params.set("query", searchQuery.trim());
      } else {
        params.delete("query");
      }

      router.push(`?${params.toString()}`);
    },
    [searchQuery, searchParams, router]
  );

  const toggleFilter = (value: string, type: "status" | "contentType") => {
    setActiveFilters((prev) => {
      const updated = { ...prev };
      if (updated[type]?.includes(value)) {
        updated[type] = updated[type].filter((item) => item !== value);
      } else {
        updated[type] = [...(updated[type] || []), value];
      }
      return updated;
    });
  };

  const clearFilters = () => {
    setActiveFilters(initialFilters);
    setSearchQuery("");
    router.push(window.location.pathname);
    closeMenuMenuFilters();
  };

  const applyFilters = () => {
    const params = new URLSearchParams(searchParams);

    if (activeFilters.status.length > 0) {
      params.set("status", activeFilters.status.join(","));
    } else {
      params.delete("status");
    }

    if (activeFilters.contentType && activeFilters.contentType.length > 0) {
      params.set("contentType", activeFilters.contentType.join(","));
    } else {
      params.delete("contentType");
    }

    router.push(`?${params.toString()}`);
    closeMenuMenuFilters();
  };

  const [openMenuFilters, setOpenMenuFilters] = useState(false);
  const closeMenuMenuFilters = () => setOpenMenuFilters(false);

  useEffect(() => {
    const status = searchParams.get("status");
    const contentType = searchParams.get("contentType");

    const newFilters = { ...initialFilters };

    if (status) {
      newFilters.status = status.split(",");
    }

    if (contentType) {
      newFilters.contentType = contentType.split(",");
    }

    setActiveFilters(newFilters);
  }, [searchParams]);

  const [data, setData] = useState<IJob | null>(null);

  const handleChange = (
    field: keyof IJob,
    value: string | number | boolean | string[]
  ) => {
    setData((prev) => (prev ? { ...prev, [field]: value } : prev));
  };

  const handleUpdate = async () => {
    if (data) {
      await updateJob(
        data.id,
        data.description || "Job description", // question parameter
        data.title,
        data.country,
        new File([], "placeholder.jpg", { type: "image/jpeg" }), // image placeholder
        data.positions,
        data.location,
        data.salary,
        data.applicationDeadline,
        data.estimatedDeparture,
        data.requirements,
        data.benefits,
        data.description,
        data.company,
        data.workType,
        data.featured,
        data.workingHours,
        data.overtime,
        data.accommodation,
        data.workEnvironment,
        data.trainingPeriod,
        data.status
      );
    }
  };

  const handleCreate = async () => {
    if (data) {
      await createJob(
        data.description || "Job description", // question parameter
        data.title,
        data.country,
        new File([], "placeholder.jpg", { type: "image/jpeg" }), // image placeholder
        data.positions,
        data.location,
        data.salary,
        data.applicationDeadline,
        data.estimatedDeparture,
        data.requirements,
        data.benefits,
        data.description,
        data.company,
        data.workType,
        data.featured,
        data.workingHours,
        data.overtime,
        data.accommodation,
        data.workEnvironment,
        data.trainingPeriod,
        data.status
      );
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Job Dashboard</h2>

        <div className="flex items-center gap-2">
          <Button
            size="sm"
            className="h-8 gap-1"
            onClick={() => setIsCreateJobOpen(true)}
          >
            <Plus className="h-4 w-4" />
            Create Job
          </Button>
        </div>
      </div>

      <CreateJobDialog
        isOpen={isCreateJobOpen}
        onOpenChange={setIsCreateJobOpen}
        onChange={handleChange}
        onJobCreated={handleCreate}
        data={data}
        isLoading={isLoading}
      />

      <UpdateJobDialog
        isOpen={isUpdateJobOpen}
        onOpenChange={setIsUpdateJobOpen}
        onChange={handleChange}
        data={data}
        onJobUpdated={handleUpdate}
        isLoading={isLoading}
      />

      <div className="space-y-4">
        <Card className="bg-white dark:bg-gray-800">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle />

              <div className="flex items-center gap-2">
                <TableSearch
                  handleSearch={handleSearch}
                  searchQuery={searchQuery}
                  setSearchQuery={setSearchQuery}
                  placeholder="Search Jobs..."
                />

                <Button
                  variant="secondary"
                  size="sm"
                  className="h-8 gap-1"
                  onClick={clearFilters}
                >
                  <RefreshCw className="h-4 w-4" />
                  Refresh
                </Button>

                <JobFilter
                  openMenuFilters={openMenuFilters}
                  setOpenMenuFilters={setOpenMenuFilters}
                  activeFilters={activeFilters}
                  toggleFilter={toggleFilter}
                  clearFilters={clearFilters}
                  applyFilters={applyFilters}
                  closeMenuMenuFilters={closeMenuMenuFilters}
                />
              </div>
            </div>
          </CardHeader>

          <JobTable Jobs={Jobs} isLoading={isLoading} />
        </Card>
      </div>
    </div>
  );
}
