"use client";

import { useCallback, useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Plus, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import UpdateFAQDialog from "@/components/common/admin/faqDashboard/UpdateFAQDialog";
import CreateFAQDialog from "@/components/common/admin/faqDashboard/CreateFAQDialog";
import { FAQFilter } from "@/components/common/admin/faqDashboard/FAQFilter";
import { FAQTable } from "@/components/common/admin/faqDashboard/FAQTable";
import { TableSearch } from "@/components/common/admin/TableSearch";
import { useFAQStore } from "@/utils/stores/faqStore";

const initialFilters = { status: [] as string[], contentType: [] as string[] };

export default function FAQDashboardPage() {
  const { isLoading, getAllFAQs, updateFAQ, createFAQ } = useFAQStore();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");
  const query = searchParams.get("query") || "";
  const queryString = searchParams.toString();

  const [isCreateFAQOpen, setIsCreateFAQOpen] = useState(false);
  const [isUpdateFAQOpen, setIsUpdateFAQOpen] = useState(false);
  // Remove unused variable
  // const [selectedFAQ, setSelectedFAQ] = useState<IFAQ | null>(null);

  const [activeFilters, setActiveFilters] = useState(initialFilters);
  const [FAQs, setFAQs] = useState<IFAQ[] | []>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getAllFAQs();
      const data = res?.data?.FAQs;

      setFAQs(data || []);
    };

    fetchData();
  }, [query, queryString, searchParams, getAllFAQs]);

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

  const [data, setData] = useState<IFAQ | null>(null);

  const handleChange = (field: keyof IFAQ, value: string) => {
    setData((prev) => (prev ? { ...prev, [field]: value } : prev));
  };

  const handleUpdate = async () => {
    if (data) {
      await updateFAQ(
        data._id,
        data.question,
        data.answer,
        data.category,
        data.status
      );
    }
  };

  const handleCreate = async () => {
    if (data) {
      await createFAQ(data.question, data.answer, data.category, data.status);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">FAQ Dashboard</h2>

        <div className="flex items-center gap-2">
          <Button
            size="sm"
            className="h-8 gap-1"
            onClick={() => setIsCreateFAQOpen(true)}
          >
            <Plus className="h-4 w-4" />
            Create FAQ
          </Button>
        </div>
      </div>

      <CreateFAQDialog
        isOpen={isCreateFAQOpen}
        onOpenChange={setIsCreateFAQOpen}
        onChange={handleChange}
        onFAQCreated={handleCreate}
        data={data}
        isLoading={isLoading}
      />

      <UpdateFAQDialog
        isOpen={isUpdateFAQOpen}
        onOpenChange={setIsUpdateFAQOpen}
        onChange={handleChange}
        data={data}
        onFAQUpdated={handleUpdate}
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
                  placeholder="Search FAQs..."
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

                <FAQFilter
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

          <FAQTable
            FAQs={FAQs}
            isLoading={isLoading}
            onView={(faq) => {
              setData(faq);
              setIsUpdateFAQOpen(true);
            }}
            onEdit={(faq) => {
              setData(faq);
              setIsUpdateFAQOpen(true);
            }}
            onDelete={(faq) => {
              // Add delete functionality if needed
              console.log("Delete FAQ:", faq);
            }}
          />
        </Card>
      </div>
    </div>
  );
}
