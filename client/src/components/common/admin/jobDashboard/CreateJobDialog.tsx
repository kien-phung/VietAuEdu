import { Save } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

export const JobStatus = [
  { value: "active", label: "Active" },
  { value: "inactive", label: "Inactive" },
];

interface CreateJobDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onChange: (field: keyof IJob, value: string) => void;
  onJobCreated: () => void;
  data: IJob | null;
  isLoading: boolean;
}

const CreateJobDialog = ({
  isOpen,
  onOpenChange,
  onChange,
  onJobCreated,
  data,
  isLoading,
}: CreateJobDialogProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[525px] bg-white dark:bg-gray-800">
        <DialogHeader>
          <DialogTitle>Create New Job</DialogTitle>

          <DialogDescription>Create a new Job.</DialogDescription>
        </DialogHeader>

        <ScrollArea className="h-[60vh] pr-4">
          <div className="grid gap-4 py-4">
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="update-title">Title</Label>

                <Input
                  id="update-title"
                  value={data?.title}
                  onChange={(e) => onChange("title", e.target.value)}
                />
              </div>
            </div>

            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="update-country">Country</Label>

                <Input
                  id="update-country"
                  value={data?.country}
                  onChange={(e) => onChange("country", e.target.value)}
                />
              </div>
            </div>

            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="update-positions">Positions</Label>

                <Input
                  id="update-positions"
                  value={data?.positions}
                  onChange={(e) => onChange("positions", e.target.value)}
                />
              </div>
            </div>

            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="update-location">Location</Label>

                <Input
                  id="update-location"
                  value={data?.location}
                  onChange={(e) => onChange("location", e.target.value)}
                />
              </div>
            </div>

            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="update-salary">Salary</Label>

                <Input
                  id="update-salary"
                  value={data?.salary}
                  onChange={(e) => onChange("salary", e.target.value)}
                />
              </div>
            </div>

            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="update-application-deadline">
                  Application Deadline
                </Label>

                <Input
                  id="update-application-deadline"
                  value={data?.applicationDeadline}
                  onChange={(e) =>
                    onChange("applicationDeadline", e.target.value)
                  }
                />
              </div>
            </div>

            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="update-estimatedDeparture">
                  Estimated Departure
                </Label>

                <Input
                  id="update-estimated-departure"
                  value={data?.estimatedDeparture}
                  onChange={(e) =>
                    onChange("estimatedDeparture", e.target.value)
                  }
                />
              </div>
            </div>

            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="update-requirements">Requirements</Label>

                <Input
                  id="update-requirements"
                  value={data?.requirements}
                  onChange={(e) => onChange("requirements", e.target.value)}
                />
              </div>
            </div>

            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="update-benefits">benefits</Label>

                <Input
                  id="update-benefits"
                  value={data?.benefits}
                  onChange={(e) => onChange("benefits", e.target.value)}
                />
              </div>
            </div>

            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="update-company">company</Label>

                <Input
                  id="update-company"
                  value={data?.company}
                  onChange={(e) => onChange("company", e.target.value)}
                />
              </div>
            </div>

            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="update-workType">workType</Label>

                <Input
                  id="update-workType"
                  value={data?.workType}
                  onChange={(e) => onChange("workType", e.target.value)}
                />
              </div>
            </div>

            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="update-featured">featured</Label>

                <Input
                  id="update-featured"
                  value={data?.featured ? "true" : "false"}
                  onChange={(e) => onChange("featured", e.target.value)}
                />
              </div>
            </div>

            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="update-workingHours">workingHours</Label>

                <Input
                  id="update-workingHours"
                  value={data?.workingHours}
                  onChange={(e) => onChange("workingHours", e.target.value)}
                />
              </div>
            </div>

            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="update-overtime">overtime</Label>

                <Input
                  id="update-overtime"
                  value={data?.overtime}
                  onChange={(e) => onChange("overtime", e.target.value)}
                />
              </div>
            </div>

            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="update-accommodation">accommodation</Label>

                <Input
                  id="update-accommodation"
                  value={data?.accommodation}
                  onChange={(e) => onChange("accommodation", e.target.value)}
                />
              </div>
            </div>

            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="update-work-environment">
                  Work Environment
                </Label>

                <Input
                  id="update-work-environment"
                  value={data?.workEnvironment}
                  onChange={(e) => onChange("workEnvironment", e.target.value)}
                />
              </div>
            </div>

            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="update-training-period">Training Period</Label>

                <Input
                  id="update-training-period"
                  value={data?.trainingPeriod}
                  onChange={(e) => onChange("trainingPeriod", e.target.value)}
                />
              </div>
            </div>

            <div className="grid gap-2 mt-3">
              <Label htmlFor="update-country">Status</Label>

              <Select
                value={data?.status}
                onValueChange={(value) => onChange("status", value)}
              >
                <SelectTrigger id="update-status">
                  <SelectValue placeholder="Select a status" />
                </SelectTrigger>

                <SelectContent>
                  {JobStatus.map((item) => (
                    <SelectItem key={item.value} value={item.value}>
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </ScrollArea>

        <DialogFooter>
          <Button
            variant="outline"
            onClick={() => {
              onOpenChange(false);
            }}
          >
            Cancel
          </Button>

          <Button onClick={onJobCreated} disabled={isLoading}>
            {isLoading ? (
              <>Creating...</>
            ) : (
              <>
                <Save className="h-4 w-4" />
                Create
              </>
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CreateJobDialog;
