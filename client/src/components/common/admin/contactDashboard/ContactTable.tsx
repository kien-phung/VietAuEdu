import { TableSkeleton } from "@/components/layout/feedback/TableSkeleton";
import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
// IContact is declared in global namespace
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
  return (
    <ScrollArea className="h-[calc(100vh-220px)] w-full rounded-xl bg-white dark:bg-gray-800">
      <CardContent>
        <Table className="border-collapse [&_tr]:border-b-2 [&_tr]:border-gray-200 dark:[&_tr]:border-gray-700">
          <TableHeader>
            <TableRow className="border-b-2 border-gray-300 dark:border-gray-700">
              <TableHead className="text-center font-bold">User</TableHead>
              <TableHead className="text-center font-bold">Program</TableHead>
              <TableHead className="text-center font-bold">Message</TableHead>
              <TableHead className="text-center font-bold">
                Submit Date
              </TableHead>
              <TableHead className="text-center font-bold">Status</TableHead>
              <TableHead className="text-right font-bold">Actions</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {isLoading ? (
              <TableRow>
                <TableCell colSpan={6}>
                  <TableSkeleton />
                </TableCell>
              </TableRow>
            ) : contacts.length > 0 ? (
              contacts.map((contact) => (
                <TableRow key={contact._id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className="flex flex-col">
                        <span className="font-medium hover:underline">
                          {contact?.name}
                        </span>
                        <span className="text-sm text-muted-foreground hover:underline">
                          {contact?.phone}
                        </span>
                        <span className="text-sm text-muted-foreground hover:underline">
                          {contact?.email}
                        </span>
                      </div>
                    </div>
                  </TableCell>

                  <TableCell>{contact?.program?.title}</TableCell>

                  <TableCell className="text-center">
                    {contact?.message}
                  </TableCell>

                  <TableCell className="flex items-center justify-center gap-1">
                    {formatDateAgo(contact?.createdAt || "")}
                  </TableCell>

                  <TableCell className="flex items-center justify-center gap-2">
                    <span
                      className={`h-2 w-2 rounded-full ${getStatusColor(
                        contact?.status || ""
                      )}`}
                    />
                    <span className="capitalize">{contact.status}</span>
                  </TableCell>

                  <TableCell className="text-right">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => onViewDetails(contact)}
                    >
                      View
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6} className="text-center">
                  No contacts found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </CardContent>
    </ScrollArea>
  );
}
