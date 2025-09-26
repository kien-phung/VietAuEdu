import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Save } from "lucide-react";

interface CreateProgramDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onChange: (field: keyof IProgram, value: string | string[] | boolean) => void;
  onProgramCreated: () => void;
  data: IProgram | null;
  isLoading: boolean;
}

const CreateProgramDialog = ({
  isOpen,
  onOpenChange,
  onChange,
  onProgramCreated,
  data,
  isLoading,
}: CreateProgramDialogProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[525px] bg-white dark:bg-gray-800">
        <DialogHeader>
          <DialogTitle>Create New Program</DialogTitle>
        </DialogHeader>

        <ScrollArea className="h-[60vh]">
          <div className="grid gap-4 py-4 pr-4">
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="create-title">Title</Label>
                <Input
                  id="create-title"
                  value={data?.title || ""}
                  onChange={(e) => onChange("title", e.target.value)}
                />
              </div>
            </div>

            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="create-description">Description</Label>
                <Textarea
                  id="create-description"
                  value={data?.description || ""}
                  onChange={(e) => onChange("description", e.target.value)}
                />
              </div>
            </div>

            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="create-country">Country</Label>
                <Input
                  id="create-country"
                  value={data?.country || ""}
                  onChange={(e) => onChange("country", e.target.value)}
                />
              </div>
            </div>

            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="create-duration">Duration</Label>
                <Input
                  id="create-duration"
                  value={data?.duration || ""}
                  onChange={(e) => onChange("duration", e.target.value)}
                />
              </div>
            </div>

            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="create-tuition">Tuition</Label>
                <Input
                  id="create-tuition"
                  value={data?.tuition || ""}
                  onChange={(e) => onChange("tuition", e.target.value)}
                />
              </div>
            </div>

            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="create-requirements">Requirements</Label>
                <Input
                  id="create-requirements"
                  value={data?.requirements?.join(", ") || ""}
                  onChange={(e) =>
                    onChange(
                      "requirements",
                      e.target.value.split(",").map((item) => item.trim())
                    )
                  }
                  placeholder="Separate requirements with commas"
                />
              </div>
            </div>

            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="create-benefits">Benefits</Label>
                <Input
                  id="create-benefits"
                  value={data?.benefits?.join(", ") || ""}
                  onChange={(e) =>
                    onChange(
                      "benefits",
                      e.target.value.split(",").map((item) => item.trim())
                    )
                  }
                  placeholder="Separate benefits with commas"
                />
              </div>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="create-featured">Featured</Label>
              <Select
                value={data?.featured ? "true" : "false"}
                onValueChange={(value) =>
                  onChange("featured", value === "true")
                }
              >
                <SelectTrigger id="create-featured">
                  <SelectValue placeholder="Select featured status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="true">Yes</SelectItem>
                  <SelectItem value="false">No</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="create-status">Status</Label>
              <Select
                value={data?.status || "inactive"}
                onValueChange={(value: string) =>
                  onChange("status", value as "active" | "inactive")
                }
              >
                <SelectTrigger id="create-status">
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
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

          <Button onClick={onProgramCreated} disabled={isLoading}>
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

export default CreateProgramDialog;
