import { ScrollArea } from "@/components/ui/scroll-area";
import { CardContent } from "@/components/ui/card";
import { TableSkeleton } from "@/components/layout/TableSkeleton";
import { Button } from "@/components/ui/button";
import { Edit, Eye, Trash2 } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface IJobTableProps {
  Jobs: IJob[];
  isLoading: boolean;
  onEdit?: (job: IJob) => void;
  onView?: (job: IJob) => void;
  onDelete?: (job: IJob) => void;
}

export const JobTable = ({
  Jobs,
  isLoading,
  onEdit,
  onView,
  onDelete,
}: IJobTableProps) => {
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
    <ScrollArea className="h-[calc(100vh-220px)] w-full rounded-xl">
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-center">Title</TableHead>
              <TableHead className="text-center">Country</TableHead>
              <TableHead className="text-center">Company</TableHead>
              <TableHead className="text-center">Positions</TableHead>
              <TableHead className="text-center">Salary</TableHead>
              <TableHead className="text-center">Work Type</TableHead>
              <TableHead className="text-center">Status</TableHead>
              <TableHead className="text-center">Actions</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {isLoading ? (
              <TableRow>
                <TableCell colSpan={8}>
                  <TableSkeleton />
                </TableCell>
              </TableRow>
            ) : Jobs.length > 0 ? (
              Jobs.map((job) => (
                <TableRow key={job.id}>
                  <TableCell className="text-center text-white">
                    {job.title}
                  </TableCell>

                  <TableCell className="text-center text-white">
                    {job.country}
                  </TableCell>

                  <TableCell className="text-center text-white">
                    {job.company}
                  </TableCell>

                  <TableCell className="text-center text-white">
                    {job.positions}
                  </TableCell>

                  <TableCell className="text-center text-white">
                    {job.salary}
                  </TableCell>

                  <TableCell className="text-center text-white">
                    {job.workType}
                  </TableCell>

                  <TableCell className="text-center">
                    <div className="flex items-center justify-center gap-2">
                      <span
                        className={`h-2 w-2 rounded-full ${getStatusColor(
                          job?.status || ""
                        )}`}
                      />
                      <span className="capitalize">{job.status}</span>
                    </div>
                  </TableCell>

                  <TableCell className="text-center">
                    <div className="flex items-center justify-center gap-1">
                      {onView && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => onView(job)}
                          className="h-8 w-8 p-0"
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                      )}
                      {onEdit && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => onEdit(job)}
                          className="h-8 w-8 p-0"
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                      )}
                      {onDelete && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => onDelete(job)}
                          className="h-8 w-8 p-0 text-red-500 hover:text-red-700"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={8} className="text-center py-8">
                  <div className="text-gray-500">No jobs found</div>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </CardContent>
    </ScrollArea>
  );
};
