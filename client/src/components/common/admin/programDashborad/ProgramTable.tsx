import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CardContent } from "@/components/ui/card";
import { TableSkeleton } from "@/components/layout/feedback/TableSkeleton";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";

interface ProgramTableProps {
  Programs: IProgram[];
  isLoading: boolean;
  onEdit?: (program: IProgram) => void;
  onView?: (program: IProgram) => void;
  onDelete?: (program: IProgram) => void;
}

export const ProgramTable = ({
  Programs,
  isLoading,
  onEdit,
  onView,
  onDelete,
}: ProgramTableProps) => {
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

  return (
    <ScrollArea className="h-[calc(100vh-220px)] w-full rounded-xl bg-white dark:bg-gray-800">
      <CardContent>
        <Table className="border-collapse [&_tr]:border-b-2 [&_tr]:border-gray-200 dark:[&_tr]:border-gray-700">
          <TableHeader>
            <TableRow className="border-b-2 border-gray-300 dark:border-gray-700">
              <TableHead className="text-center font-bold">STT</TableHead>
              <TableHead className="text-center font-bold">Title</TableHead>
              <TableHead className="text-center font-bold">Country</TableHead>
              <TableHead className="text-center font-bold">Duration</TableHead>
              <TableHead className="text-center font-bold">Tuition</TableHead>
              <TableHead className="text-center font-bold">Featured</TableHead>
              <TableHead className="text-center font-bold">Status</TableHead>
              <TableHead className="text-right font-bold">Actions</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {isLoading ? (
              <TableRow>
                <TableCell colSpan={7}>
                  <TableSkeleton />
                </TableCell>
              </TableRow>
            ) : Programs.length > 0 ? (
              Programs.map((program, index) => (
                <TableRow key={program._id}>
                  <TableCell className="text-center">{index + 1}</TableCell>
                  <TableCell className="text-center">{program.title}</TableCell>

                  <TableCell className="text-center">
                    {program.country}
                  </TableCell>

                  <TableCell className="text-center">
                    {program.duration}
                  </TableCell>

                  <TableCell className="text-center">
                    {program.tuition}
                  </TableCell>

                  <TableCell className="text-center">
                    <div className="inline-flex items-center justify-center gap-2">
                      <span
                        className={`h-2 w-2 rounded-full ${
                          program.featured ? "bg-green-500" : "bg-red-500"
                        }`}
                      />
                      <span className="capitalize">
                        {program.featured ? "Yes" : "No"}
                      </span>
                    </div>
                  </TableCell>

                  <TableCell className="text-center">
                    <div className="inline-flex items-center justify-center gap-2">
                      <span
                        className={`h-2 w-2 rounded-full ${getStatusColor(
                          program.status
                        )}`}
                      />
                      <span className="capitalize">{program.status}</span>
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

                        {onView && (
                          <DropdownMenuItem
                            onClick={() => onView(program)}
                            className="text-gray-900 dark:text-white cursor-pointer hover:bg-blue-100 dark:hover:bg-blue-700 hover:text-blue-800 dark:hover:text-white focus:bg-blue-100 dark:focus:bg-blue-700 active:bg-blue-200 dark:active:bg-blue-800 transition-all duration-200 rounded"
                          >
                            View
                          </DropdownMenuItem>
                        )}

                        {onEdit && (
                          <DropdownMenuItem
                            onClick={() => onEdit(program)}
                            className="text-gray-900 dark:text-white cursor-pointer hover:bg-blue-100 dark:hover:bg-blue-700 hover:text-blue-800 dark:hover:text-white focus:bg-blue-100 dark:focus:bg-blue-700 active:bg-blue-200 dark:active:bg-blue-800 transition-all duration-200 rounded"
                          >
                            Edit
                          </DropdownMenuItem>
                        )}

                        {onDelete && (
                          <DropdownMenuItem
                            onClick={() => onDelete(program)}
                            className="text-red-500 cursor-pointer hover:bg-red-100 dark:hover:bg-red-900 hover:text-red-700 dark:hover:text-red-400 focus:bg-red-100 dark:focus:bg-red-900 active:bg-red-200 dark:active:bg-red-800 transition-all duration-200 rounded"
                          >
                            Delete
                          </DropdownMenuItem>
                        )}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={7} className="text-center">
                  <div className="text-gray-500">No programs found</div>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </CardContent>
    </ScrollArea>
  );
};
