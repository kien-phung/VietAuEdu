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
import { EStatus } from "@/utils/types/enum";

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

  // Sử dụng kiểu mở rộng của IJob để bao gồm trường image
  type ExtendedJobData = IJob & { image?: File | null };
  const [data, setData] = useState<ExtendedJobData | null>(null);

  const handleChange = (
    field: keyof ExtendedJobData,
    value: string | number | boolean | string[] | File | null
  ) => {
    setData((prev) => (prev ? { ...prev, [field]: value } : prev));
  };

  const handleUpdate = async () => {
    if (data) {
      try {
        // Ensure all fields are of the correct types
        const positions =
          typeof data.positions === "number"
            ? data.positions
            : parseInt(data.positions as unknown as string) || 0;
        const featured =
          typeof data.featured === "boolean"
            ? data.featured
            : data.featured === "true";
        const requirements = Array.isArray(data.requirements)
          ? data.requirements
          : [];
        const benefits = Array.isArray(data.benefits) ? data.benefits : [];

        // Xác định xem sử dụng file hình ảnh mới hay URL hiện có
        const imageToUse =
          data.image instanceof File ? data.image : data.imageUrl || "";

        // Direct call to the updateJob function with the optional question parameter
        await updateJob(
          data._id,
          data.title || "",
          data.country || "",
          imageToUse, // Sử dụng file mới hoặc URL cũ
          positions,
          data.location || "",
          data.salary || "",
          data.applicationDeadline || "",
          data.estimatedDeparture || "",
          requirements,
          benefits,
          data.description || "Job description",
          data.company || "",
          data.workType || "",
          featured,
          data.workingHours || "",
          data.overtime || "",
          data.accommodation || "",
          data.workEnvironment || "",
          data.trainingPeriod || "",
          data.status || EStatus.ACTIVE,
          data.description || "" // Optional question parameter
        );

        // Refresh the jobs list after update
        const res = await getAllJobs();
        setJobs(res?.data?.jobs || []);

        // Close the dialog
        setIsUpdateJobOpen(false);
      } catch (error) {
        console.error("Error updating job:", error);
      }
    }
  };

  const handleCreate = async () => {
    if (data) {
      try {
        // Ensure all fields are of the correct types
        const positions =
          typeof data.positions === "number"
            ? data.positions
            : parseInt(data.positions as unknown as string) || 0;
        const featured =
          typeof data.featured === "boolean"
            ? data.featured
            : data.featured === "true";
        const requirements = Array.isArray(data.requirements)
          ? data.requirements
          : [];
        const benefits = Array.isArray(data.benefits) ? data.benefits : [];

        // Sử dụng file hình ảnh nếu có
        const imageFile = data.image instanceof File ? data.image : null;

        await createJob(
          data.description || "Job description", // question parameter
          data.title || "",
          data.country || "",
          imageFile, // Truyền file hình ảnh nếu có
          positions,
          data.location || "",
          data.salary || "",
          data.applicationDeadline || "",
          data.estimatedDeparture || "",
          requirements,
          benefits,
          data.description || "",
          data.company || "",
          data.workType || "",
          featured,
          data.workingHours || "",
          data.overtime || "",
          data.accommodation || "",
          data.workEnvironment || "",
          data.trainingPeriod || "",
          data.status || EStatus.ACTIVE
        );

        // Refresh the jobs list after create
        const res = await getAllJobs();
        setJobs(res?.data?.jobs || []);

        // Close the dialog and reset the form
        setIsCreateJobOpen(false);
        setData({
          _id: "",
          title: "",
          country: "",
          positions: 0,
          location: "",
          salary: "",
          applicationDeadline: "",
          estimatedDeparture: "",
          requirements: [],
          benefits: [],
          description: "",
          company: "",
          workType: "",
          featured: false,
          workingHours: "",
          overtime: "",
          accommodation: "",
          workEnvironment: "",
          trainingPeriod: "",
          status: EStatus.ACTIVE,
        });
      } catch (error) {
        console.error("Error creating job:", error);
      }
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

          <JobTable
            Jobs={Jobs}
            isLoading={isLoading}
            onView={(job) => {
              setData(job);
              setIsUpdateJobOpen(true);
            }}
            onEdit={(job) => {
              setData(job);
              setIsUpdateJobOpen(true);
            }}
            onDelete={(job) => {
              // Add delete functionality if needed
              console.log("Delete job:", job);
            }}
          />
        </Card>
      </div>
    </div>
  );
}
