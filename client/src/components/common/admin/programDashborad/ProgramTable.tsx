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

interface ProgramTableProps {
  Programs: IProgram[];
  isLoading: boolean;
}

export const ProgramTable = ({ Programs, isLoading }: ProgramTableProps) => {
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
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-center">Title</TableHead>
              <TableHead className="text-center">Country</TableHead>
              <TableHead className="text-center">Duration</TableHead>
              <TableHead className="text-center">Tuition</TableHead>
              <TableHead className="text-center">Featured</TableHead>
              <TableHead className="text-center">Status</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {isLoading ? (
              <TableRow>
                <TableCell colSpan={6}>
                  <TableSkeleton />
                </TableCell>
              </TableRow>
            ) : Programs.length > 0 ? (
              Programs.map((program) => (
                <TableRow key={program._id}>
                  <TableCell className="flex items-center justify-center gap-1">
                    {program.title}
                  </TableCell>

                  <TableCell className="flex items-center justify-center gap-1">
                    {program.country}
                  </TableCell>

                  <TableCell className="flex items-center justify-center gap-1">
                    {program.duration}
                  </TableCell>

                  <TableCell className="flex items-center justify-center gap-1">
                    {program.tuition}
                  </TableCell>

                  <TableCell className="flex items-center justify-center gap-2">
                    <span
                      className={`h-2 w-2 rounded-full ${
                        program.featured ? "bg-green-500" : "bg-red-500"
                      }`}
                    />
                    <span className="capitalize">
                      {program.featured ? "Yes" : "No"}
                    </span>
                  </TableCell>

                  <TableCell className="flex items-center justify-center gap-2">
                    <span
                      className={`h-2 w-2 rounded-full ${getStatusColor(
                        program.status
                      )}`}
                    />
                    <span className="capitalize">{program.status}</span>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6} className="text-center">
                  No programs found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </CardContent>
    </ScrollArea>
  );
};
