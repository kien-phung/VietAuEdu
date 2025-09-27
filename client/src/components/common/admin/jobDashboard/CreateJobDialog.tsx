import { Image as ImageIcon, Save } from "lucide-react";
import { useState, useRef, ChangeEvent } from "react";
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
import Image from "next/image";

export const JobStatus = [
  { value: "active", label: "Active" },
  { value: "inactive", label: "Inactive" },
];

interface CreateJobDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onChange: (
    field: keyof IJob,
    value: string | number | boolean | string[] | File | null
  ) => void;
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
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (file) {
      onChange("image", file);

      // Tạo URL để xem trước hình ảnh
      const previewUrl = URL.createObjectURL(file);
      setPreviewImage(previewUrl);
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

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
                <Label htmlFor="update-image">Image</Label>

                <div className="flex flex-col gap-2">
                  <input
                    type="file"
                    id="update-image"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    accept="image/*"
                    className="hidden"
                  />

                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleButtonClick}
                    className="flex items-center gap-2"
                  >
                    <ImageIcon className="h-4 w-4" />
                    Upload Image
                  </Button>

                  {previewImage && (
                    <div className="relative mt-2 h-40 w-full overflow-hidden rounded-md border">
                      <Image
                        src={previewImage}
                        alt="Preview"
                        fill
                        sizes="(max-width: 768px) 100vw, 300px"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="update-positions">Positions</Label>

                <Input
                  id="update-positions"
                  type="number"
                  value={data?.positions || ""}
                  onChange={(e) =>
                    onChange("positions", parseInt(e.target.value) || 0)
                  }
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
                <Label htmlFor="update-requirements">
                  Requirements (comma-separated)
                </Label>

                <Input
                  id="update-requirements"
                  value={
                    Array.isArray(data?.requirements)
                      ? data.requirements.join(", ")
                      : data?.requirements || ""
                  }
                  onChange={(e) =>
                    onChange(
                      "requirements",
                      e.target.value
                        .split(",")
                        .map((item) => item.trim())
                        .filter((item) => item)
                    )
                  }
                  placeholder="Enter requirements separated by commas"
                />
              </div>
            </div>

            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="update-benefits">
                  Benefits (comma-separated)
                </Label>

                <Input
                  id="update-benefits"
                  value={
                    Array.isArray(data?.benefits)
                      ? data.benefits.join(", ")
                      : data?.benefits || ""
                  }
                  onChange={(e) =>
                    onChange(
                      "benefits",
                      e.target.value
                        .split(",")
                        .map((item) => item.trim())
                        .filter((item) => item)
                    )
                  }
                  placeholder="Enter benefits separated by commas"
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

                <Select
                  value={data?.featured ? "true" : "false"}
                  onValueChange={(value) =>
                    onChange("featured", value === "true")
                  }
                >
                  <SelectTrigger id="update-featured">
                    <SelectValue placeholder="Select featured status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="true">Yes</SelectItem>
                    <SelectItem value="false">No</SelectItem>
                  </SelectContent>
                </Select>
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
            className="bg-gray-50 border-gray-300 text-gray-700 hover:bg-red-200 hover:text-red-600 hover:border-red-200 dark:bg-transparent dark:border-gray-700 dark:text-white dark:hover:bg-red-900 dark:hover:text-white"
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
