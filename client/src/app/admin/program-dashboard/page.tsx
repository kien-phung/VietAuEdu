"use client";

import { useCallback, useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Plus, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { useProgramStore } from "@/utils/stores/programStore";
import CreateProgramDialog from "@/components/common/admin/programDashborad/CreateProgramDialog";
import UpdateProgramDialog from "@/components/common/admin/programDashborad/UpdateProgramDialog";
import { TableSearch } from "@/components/common/admin/TableSearch";
import { ProgramFilter } from "@/components/common/admin/programDashborad/ProgramFilter";
import { ProgramTable } from "@/components/common/admin/programDashborad/ProgramTable";
import { EStatus } from "@/utils/types/enum";

const initialFilters = { status: [] as string[] };

export default function ProgramDashboardPage() {
  const { isLoading, getAllPrograms, createProgram, updateProgram } =
    useProgramStore();

  const searchParams = useSearchParams();
  const router = useRouter();
  const query = searchParams.get("query") || "";
  const [searchQuery, setSearchQuery] = useState(query);

  const setSearchParams = useCallback(
    (params: URLSearchParams) => {
      router.push(`?${params.toString()}`);
    },
    [router]
  );

  const [isCreateProgramOpen, setIsCreateProgramOpen] = useState(false);
  const [isUpdateProgramOpen, setIsUpdateProgramOpen] = useState(false);

  const [activeFilters, setActiveFilters] = useState<{
    status: string[];
  }>(initialFilters);
  const [Programs, setPrograms] = useState<IProgram[] | []>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getAllPrograms();
      const data = res?.data?.programs;
      setPrograms(data || []);
    };

    // Only run the effect on the client
    if (typeof window !== "undefined") {
      fetchData();
    }
  }, [query, searchParams, getAllPrograms]);

  const handleSearch = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      const params = new URLSearchParams(searchParams.toString());

      if (searchQuery.trim()) {
        params.set("query", searchQuery.trim());
      } else {
        params.delete("query");
      }

      setSearchParams(params);
    },
    [searchQuery, searchParams, setSearchParams]
  );

  const toggleFilter = (value: string, type: "status") => {
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
    setSearchParams(new URLSearchParams());
    closeMenuMenuFilters();
  };

  const applyFilters = () => {
    const params = new URLSearchParams(searchParams.toString());

    if (activeFilters.status.length > 0) {
      params.set("status", activeFilters.status.join(","));
    } else {
      params.delete("status");
    }

    setSearchParams(params);
    closeMenuMenuFilters();
  };

  const [openMenuFilters, setOpenMenuFilters] = useState(false);
  const closeMenuMenuFilters = () => setOpenMenuFilters(false);

  useEffect(() => {
    const status = searchParams.get("status");

    const newFilters = { ...initialFilters };

    if (status) {
      newFilters.status = status.split(",");
    }

    setActiveFilters(newFilters);
  }, [searchParams]);

  // Use a key to reset the dialog data completely between opens
  const [dialogKey, setDialogKey] = useState(0);
  // Sử dụng kiểu mở rộng của IProgram để bao gồm trường image
  type ExtendedProgramData = IProgram & { image?: File | null };
  const [data, setData] = useState<ExtendedProgramData | null>(null);

  const handleChange = (
    field: keyof ExtendedProgramData,
    value: string | string[] | boolean | File | null
  ) => {
    setData((prev) => (prev ? { ...prev, [field]: value } : prev));
  };

  const handleUpdate = async () => {
    if (data) {
      // Xác định xem sử dụng file hình ảnh mới hay URL hiện có
      const imageToUse =
        data.image instanceof File ? data.image : data.imageUrl || "";

      await updateProgram(
        data._id,
        data.title,
        data.description,
        data.country,
        data.duration,
        data.tuition,
        imageToUse, // Sử dụng file mới hoặc URL cũ
        data.requirements,
        data.benefits,
        data.featured,
        data.status
      );

      // Refresh the data after update
      const res = await getAllPrograms();
      const updatedData = res?.data?.programs;
      setPrograms(updatedData || []);

      setIsUpdateProgramOpen(false);
    }
  };

  const handleCreate = async () => {
    if (data) {
      // Sử dụng file hình ảnh nếu có
      const imageFile = data.image instanceof File ? data.image : null;

      await createProgram(
        data.title,
        data.description,
        data.country,
        data.duration,
        data.tuition,
        imageFile, // Truyền file hình ảnh
        data.requirements,
        data.benefits,
        data.featured,
        data.status
      );

      // Refresh the data after creation
      const res = await getAllPrograms();
      const updatedData = res?.data?.programs;
      setPrograms(updatedData || []);

      setIsCreateProgramOpen(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Program Dashboard</h2>

        <div className="flex items-center gap-2">
          <Button
            size="sm"
            className="h-8 gap-1"
            onClick={() => {
              setData({
                _id: "",
                title: "",
                description: "",
                country: "",
                duration: "",
                tuition: "",
                requirements: [],
                benefits: [],
                imageUrl: "",
                image: null,
                featured: false,
                status: EStatus.INACTIVE,
              });
              setIsCreateProgramOpen(true);
            }}
          >
            <Plus className="h-4 w-4" />
            Create Program
          </Button>
        </div>
      </div>

      <CreateProgramDialog
        key={`create-${dialogKey}`}
        isOpen={isCreateProgramOpen}
        onOpenChange={(open) => {
          setIsCreateProgramOpen(open);
          if (!open) {
            setData(null);
            setDialogKey((prev) => prev + 1);
          }
        }}
        onChange={handleChange}
        onProgramCreated={handleCreate}
        data={data}
        isLoading={isLoading}
      />

      <UpdateProgramDialog
        key={`update-${dialogKey}`}
        isOpen={isUpdateProgramOpen}
        onOpenChange={(open) => {
          setIsUpdateProgramOpen(open);
          if (!open) {
            setData(null);
            setDialogKey((prev) => prev + 1);
          }
        }}
        onChange={handleChange}
        data={data}
        onProgramUpdated={handleUpdate}
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
                  placeholder="Search Programs..."
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

                <ProgramFilter
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

          <ProgramTable Programs={Programs} isLoading={isLoading} />
        </Card>
      </div>
    </div>
  );
}
