import { DataTable } from "@/components/common/admin/DataTable";

interface ProgramTableProps {
  Programs: IProgram[];
  isLoading: boolean;
  onEdit?: (program: IProgram) => void;
  onDelete?: (programId: string) => void;
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

export const ProgramTable = ({
  Programs,
  isLoading,
  onEdit,
  onDelete,
}: ProgramTableProps) => {
  const columns = [
    {
      header: "STT",
      accessor: (_: IProgram, index: number) => index + 1,
    },
    {
      header: "Title",
      accessor: (program: IProgram) => program.title,
    },
    {
      header: "Country",
      accessor: (program: IProgram) => program.country,
    },
    {
      header: "Duration",
      accessor: (program: IProgram) => program.duration,
    },
    {
      header: "Tuition",
      accessor: (program: IProgram) => program.tuition,
    },
    {
      header: "Featured",
      accessor: (program: IProgram) => (
        <div className="inline-flex items-center justify-center gap-2">
          <span
            className={`h-2 w-2 rounded-full ${
              program.featured ? "bg-green-500" : "bg-red-500"
            }`}
          />
          <span className="capitalize">{program.featured ? "Yes" : "No"}</span>
        </div>
      ),
    },
    {
      header: "Status",
      accessor: (program: IProgram) => (
        <div className="inline-flex items-center justify-center gap-2">
          <span
            className={`h-2 w-2 rounded-full ${getStatusColor(program.status)}`}
          />
          <span className="capitalize">{program.status}</span>
        </div>
      ),
    },
  ];

  const actions = [];

  if (onEdit) {
    actions.push({
      label: "Edit",
      onClick: onEdit,
    });
  }

  if (onDelete) {
    actions.push({
      label: "Delete",
      onClick: (program: IProgram) => onDelete(program._id),
    });
  }

  return (
    <DataTable
      data={Programs}
      isLoading={isLoading}
      columns={columns}
      actions={actions}
      emptyMessage="No programs found"
    />
  );
};
