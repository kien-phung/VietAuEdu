import { CardContent } from "@/components/ui/card";
import { TableSkeleton } from "@/components/layout/TableSkeleton";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface IFAQTableProps {
  FAQs: IFAQ[];
  isLoading: boolean;
}

export const FAQTable = ({ FAQs, isLoading }: IFAQTableProps) => {
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
    <ScrollArea className="h-[calc(100vh-220px)] w-full  rounded-xl">
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-center">Question</TableHead>

              <TableHead className="text-center">Answer</TableHead>

              <TableHead className="text-center">Category</TableHead>

              <TableHead className="text-center">Status</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {isLoading ? (
              <TableRow>
                <TableCell colSpan={5}>
                  <TableSkeleton />
                </TableCell>
              </TableRow>
            ) : FAQs.length > 0 ? (
              FAQs.map((FAQ) => (
                <TableRow key={FAQ.id}>
                  <TableCell className="flex items-center justify-center gap-1 text-white">
                    {FAQ.question}
                  </TableCell>

                  <TableCell className="flex items-center justify-center gap-1 text-white">
                    {FAQ.answer}
                  </TableCell>

                  <TableCell className="flex items-center justify-center gap-2">
                    <span
                      className={`h-2 w-2 rounded-full ${getCategoryColor(
                        FAQ?.category || ""
                      )}`}
                    />

                    <span className="capitalize">{FAQ?.category}</span>
                  </TableCell>
                  
                  <TableCell className="flex items-center justify-center gap-2">
                    <span
                      className={`h-2 w-2 rounded-full ${getStatusColor(
                        FAQ?.status || ""
                      )}`}
                    />

                    <span className="capitalize">{FAQ.status}</span>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={7}>
                  {/* <ReportsEmptyState /> */}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </CardContent>
    </ScrollArea>
  );
};
