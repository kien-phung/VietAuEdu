import { DataTable } from "@/components/common/admin/DataTable";

interface IJobTableProps {
  Jobs: IJob[];
  isLoading: boolean;
  onEdit?: (job: IJob) => void;
}

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

export const JobTable = ({ Jobs, isLoading, onEdit }: IJobTableProps) => {
  const columns = [
    {
      header: "STT",
      accessor: (_: IJob, index: number) => index + 1,
    },
    {
      header: "Title",
      accessor: (job: IJob) => job.title,
    },
    {
      header: "Country",
      accessor: (job: IJob) => job.country,
    },
    {
      header: "Company",
      accessor: (job: IJob) => job.company,
    },
    {
      header: "Positions",
      accessor: (job: IJob) => job.positions,
    },
    {
      header: "Salary",
      accessor: (job: IJob) => job.salary,
    },
    {
      header: "Work Type",
      accessor: (job: IJob) => job.workType,
    },
    {
      header: "Status",
      accessor: (job: IJob) => (
        <div className="flex items-center justify-center gap-2">
          <span
            className={`h-2 w-2 rounded-full ${getStatusColor(
              job?.status || ""
            )}`}
          />
          <span className="capitalize">{job.status}</span>
        </div>
      ),
    },
  ];

  return (
    <DataTable
      data={Jobs}
      isLoading={isLoading}
      columns={columns}
      actions={
        onEdit
          ? [
              {
                label: "Edit",
                onClick: onEdit,
              },
            ]
          : []
      }
      emptyMessage="No jobs found"
    />
  );
};
