import { TableSkeleton } from "@/components/layout/feedback/TableSkeleton";
import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MoreHorizontal } from "lucide-react";

interface IFAQTableProps {
  FAQs: IFAQ[];
  isLoading: boolean;
  onEdit?: (faq: IFAQ) => void;
  onDelete?: (faq: IFAQ) => void;
}

export const FAQTable = ({
  FAQs,
  isLoading,
  onEdit,
}: IFAQTableProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-500";
      case "inactive":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  const getCategoryColor = (status: string) => {
    switch (status) {
      case "Hồ sơ du học":
        return "bg-green-500";
      case "Chi phí":
        return "bg-yellow-500";
      case "Visa":
        return "bg-green-500";
      case "Ngôn ngữ":
        return "bg-yellow-500";
      case "Định cư":
        return "bg-green-500";
      case "Dịch vụ":
        return "bg-yellow-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <ScrollArea className="h-[calc(100vh-220px)] w-full rounded-xl bg-white dark:bg-gray-800">
      <CardContent>
        <Table className="border-collapse [&_tr]:border-b-2 [&_tr]:border-gray-200 dark:[&_tr]:border-gray-700">
          <TableHeader>
            <TableRow className="border-b-2 border-gray-300 dark:border-gray-700">
              <TableHead className="text-center font-bold">STT</TableHead>

              <TableHead className="text-center font-bold">Question</TableHead>

              <TableHead className="text-center font-bold">Answer</TableHead>

              <TableHead className="text-center font-bold">Category</TableHead>

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
            ) : FAQs.length > 0 ? (
              FAQs.map((FAQ, index) => (
                <TableRow key={FAQ._id}>
                  <TableCell className="text-center">{index + 1}</TableCell>
                  <TableCell className="text-center">{FAQ.question}</TableCell>

                  <TableCell className="text-center">{FAQ.answer}</TableCell>

                  <TableCell className="text-center">
                    <div className="inline-flex items-center justify-center gap-2">
                      <span
                        className={`h-2 w-2 rounded-full ${getCategoryColor(
                          FAQ?.category || ""
                        )}`}
                      />
                      <span className="capitalize">{FAQ?.category}</span>
                    </div>
                  </TableCell>

                  <TableCell className="text-center">
                    <div className="inline-flex items-center justify-center gap-2">
                      <span
                        className={`h-2 w-2 rounded-full ${getStatusColor(
                          FAQ?.status || ""
                        )}`}
                      />
                      <span className="capitalize">{FAQ.status}</span>
                    </div>
                  </TableCell>

                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0 hover:bg-gray-100 dark:hover:bg-gray-800"
                        >
                          <MoreHorizontal className="h-4 w-4 text-gray-700 dark:text-gray-300" />
                        </Button>
                      </DropdownMenuTrigger>

                      <DropdownMenuContent
                        align="end"
                        className="bg-white dark:bg-[#1e2735] border border-gray-200 dark:border-gray-700"
                      >
                        <DropdownMenuLabel className="text-gray-900 dark:text-gray-100">
                          Actions
                        </DropdownMenuLabel>

                        <DropdownMenuSeparator className="bg-gray-200 dark:bg-gray-600" />

                        {onEdit && (
                          <DropdownMenuItem
                            onClick={() => onEdit(FAQ)}
                            className="text-gray-900 dark:text-white cursor-pointer hover:bg-blue-100 dark:hover:bg-blue-700 hover:text-blue-800 dark:hover:text-white focus:bg-blue-100 dark:focus:bg-blue-700 active:bg-blue-200 dark:active:bg-blue-800 transition-all duration-200 rounded"
                          >
                            Edit
                          </DropdownMenuItem>
                        )}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6} className="text-center">
                  <div className="text-gray-500">No FAQs found</div>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </CardContent>
    </ScrollArea>
  );
};
