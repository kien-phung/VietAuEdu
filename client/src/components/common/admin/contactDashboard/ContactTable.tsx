import { DataTable } from "@/components/common/admin/DataTable";
import { formatDateAgo } from "@/lib/utils";

interface ContactTableProps {
  contacts: IContact[];
  isLoading: boolean;
  onViewDetails: (contact: IContact) => void;
}

const getStatusColor = (status: string) => {
  switch (status) {
    case "resolved":
      return "bg-green-500";
    case "pending":
      return "bg-yellow-500";
    default:
      return "bg-gray-500";
  }
};

export function ContactTable({
  contacts,
  isLoading,
  onViewDetails,
}: ContactTableProps) {
  const columns = [
    {
      header: "STT",
      accessor: (contact: IContact, index: number) => index + 1,
    },
    {
      header: "User",
      accessor: (contact: IContact) => (
        <div className="flex items-center gap-3">
          <div className="flex flex-col">
            <span className="font-medium">{contact?.name}</span>
            <span className="text-sm text-muted-foreground">
              {contact?.phone}
            </span>
            <span className="text-sm text-muted-foreground">
              {contact?.email}
            </span>
          </div>
        </div>
      ),
    },
    {
      header: "Program",
      accessor: (contact: IContact) => contact?.program || "",
    },
    // {
    //   header: "Message",
    //   accessor: (contact: IContact) => contact?.message || "",
    // },
    {
      header: "Submit Date",
      accessor: (contact: IContact) => formatDateAgo(contact?.createdAt || ""),
    },
    {
      header: "Status",
      accessor: (contact: IContact) => (
        <div className="inline-flex items-center justify-center gap-2">
          <span
            className={`h-2 w-2 rounded-full ${getStatusColor(
              contact?.status || ""
            )}`}
          />
          <span className="capitalize">{contact.status}</span>
        </div>
      ),
    },
  ];

  return (
    <DataTable
      data={contacts}
      isLoading={isLoading}
      columns={columns}
      actions={[
        {
          label: "View",
          onClick: onViewDetails,
        },
      ]}
    />
  );
}
