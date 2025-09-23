"use client";
import { useCallback, useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Search, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { useContactStore } from "@/utils/stores/contactStore";
import { useAuthStore } from "@/utils/stores/authStore";
import ContactDetailsDialog from "@/components/common/admin/contactDashboard/ContactDetailsDialog";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ContactTable } from "@/components/common/admin/contactDashboard/ContactTable";
import { ContactFilter } from "@/components/common/admin/contactDashboard/ContactFilter";

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
      userAuth?.id,
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
        <h2 className="text-3xl font-bold tracking-tight">
          Artist Applications
        </h2>
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
        <Card className="bg-primary text-primary-foreground">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle>Contact Dashboard</CardTitle>

              <div className="flex items-center gap-2">
                <form
                  onSubmit={handleSearch}
                  className="flex items-center gap-2"
                >
                  <div className="relative w-60">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />

                    <Input
                      type="search"
                      placeholder="Search users..."
                      className="w-full pl-8"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </form>

                <Button
                  variant="secondary"
                  size="sm"
                  className="h-8 gap-1"
                  onClick={clearFilters}
                >
                  <RefreshCw className="h-4 w-4" />
                  Refresh
                </Button>

                <ContactFilter
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

          <ScrollArea className="h-[calc(100vh-340px)] w-full  rounded-xl">
            <CardContent>
              <ContactTable
                contacts={contacts}
                isLoading={isLoading}
                onViewDetails={handleViewDetails}
              />
            </CardContent>
          </ScrollArea>
        </Card>
      </div>
    </div>
  );
}
