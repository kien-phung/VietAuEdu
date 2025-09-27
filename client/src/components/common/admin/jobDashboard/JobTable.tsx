import { ScrollArea } from "@/components/ui/scroll-area";
import { CardContent } from "@/components/ui/card";
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
import { TableSkeleton } from "@/components/layout/feedback/TableSkeleton";

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
    <ScrollArea className="h-[calc(100vh-220px)] w-full rounded-xl bg-white dark:bg-gray-800">
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-center">STT</TableHead>
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
              Jobs.map((job, index) => (
                <TableRow key={job._id}>
                  <TableCell className="text-center">{index + 1}</TableCell>
                  <TableCell className="text-center">{job.title}</TableCell>

                  <TableCell className="text-center">{job.country}</TableCell>

                  <TableCell className="text-center">{job.company}</TableCell>

                  <TableCell className="text-center">{job.positions}</TableCell>

                  <TableCell className="text-center">{job.salary}</TableCell>

                  <TableCell className="text-center">{job.workType}</TableCell>

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
                          className="h-8 w-8 p-0 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                      )}
                      {onEdit && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => onEdit(job)}
                          className="h-8 w-8 p-0 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                      )}
                      {onDelete && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => onDelete(job)}
                          className="h-8 w-8 p-0 text-red-500 hover:text-red-700 hover:bg-gray-100 dark:hover:bg-gray-800"
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
