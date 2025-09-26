"use client";
import { useCallback, useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

import { useContactStore } from "@/utils/stores/contactStore";
import { useAuthStore } from "@/utils/stores/authStore";
import ContactDetailsDialog from "@/components/common/admin/contactDashboard/ContactDetailsDialog";
import { ContactTable } from "@/components/common/admin/contactDashboard/ContactTable";
import { TableSearch } from "@/components/common/admin/TableSearch";
import { ProgramFilter } from "@/components/common/admin/programDashborad/ProgramFilter";

export default function ContactDashboardPage() {
  const { userAuth } = useAuthStore();
  const { isLoading, getAllContacts, respondContact } = useContactStore();

  const searchParams = useSearchParams();
  const router = useRouter();
  const query = searchParams.get("query") || "";
  const [searchQuery, setSearchQuery] = useState(query);
  const queryString = location.search;

  const setSearchParams = useCallback(
    (params: URLSearchParams) => {
      router.push(`?${params.toString()}`);
    },
    [router]
  );

  const [isViewDetailsOpen, setIsViewDetailsOpen] = useState(false);
  const [isResponding, setIsResponding] = useState(false);
  const [selectedContact, setSelectedContact] = useState<IContact | null>(null);
  const [activeFilters, setActiveFilters] = useState<{ status: string[] }>({
    status: [],
  });
  const [contacts, setContacts] = useState<IContact[] | []>([]);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getAllContacts();

      const data = res?.data?.contacts;

      setContacts(data || []);
    };

    fetchData();
  }, [getAllContacts, query, queryString, searchParams]);

  const handleMessageChange = (value: string | null) => {
    setMessage(value);
  };

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

  const handleViewDetails = (contact: IContact) => {
    setSelectedContact(contact);
    setIsViewDetailsOpen(true);
  };

  const handleRespondContact = async () => {
    if (!selectedContact) {
      return;
    }

    if (!userAuth) {
      return;
    }

    setIsResponding(true);
    await respondContact(
      userAuth?._id,
      selectedContact.name,
      selectedContact.email,
      selectedContact.phone,
      message || ""
    );
    setIsResponding(false);

    setIsViewDetailsOpen(false);
  };

  const toggleFilter = (value: string) => {
    setActiveFilters((prev) => {
      const updated = { ...prev };
      if (updated.status.includes(value)) {
        updated.status = updated.status.filter((item) => item !== value);
      } else {
        updated.status = [...updated.status, value];
      }
      return updated;
    });
  };

  const clearFilters = () => {
    setActiveFilters({ status: [] });
    setSearchQuery("");
    setSearchParams(new URLSearchParams());
    closeMenuMenuFilters();
  };

  const applyFilters = () => {
    const params = new URLSearchParams(searchParams);

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
    if (status) {
      setActiveFilters({ status: status.split(",") });
    }
  }, [searchParams]);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Contact Dashboard</h2>
      </div>

      {/* View Contact Details Dialog */}
      <ContactDetailsDialog
        isOpen={isViewDetailsOpen}
        onOpenChange={() => setIsViewDetailsOpen(false)}
        selectedContact={selectedContact}
        handleMessageChange={handleMessageChange}
        handleRespondContact={handleRespondContact}
        message={message}
        isResponding={isResponding}
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

          <ContactTable
            contacts={contacts}
            isLoading={isLoading}
            onViewDetails={handleViewDetails}
          />
        </Card>
      </div>
    </div>
  );
}
