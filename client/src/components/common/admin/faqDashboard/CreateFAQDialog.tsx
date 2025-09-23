import { Save } from "lucide-react";
import { FAQCategory, FAQStatus } from "@/utils/constants/faqConstants";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

interface CreateFAQDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onChange: (field: keyof IFAQ, value: string) => void;
  onFAQCreated: () => void;
  data: IFAQ | null;
  isLoading: boolean;
}

const CreateFAQDialog = ({
  isOpen,
  onOpenChange,
  onChange,
  onFAQCreated,
  data,
  isLoading,
}: CreateFAQDialogProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[525px] bg-[#121212]">
        <DialogHeader>
          <DialogTitle>Create New IFAQ</DialogTitle>

          <DialogDescription>Create a new FAQ.</DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="create-question">Question</Label>

              <Input
                id="create-question"
                value={data?.question || ""}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  onChange("question", e.target.value)
                }
              />
            </div>
          </div>

          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="create-answer">Answer</Label>

              <Input
                id="create-answer"
                value={data?.answer || ""}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  onChange("answer", e.target.value)
                }
              />
            </div>
          </div>

          <div className="grid gap-2 mt-3">
            <Label htmlFor="create-category">Category</Label>

            <Select
              value={data?.category}
              onValueChange={(value: string) => onChange("category", value)}
            >
              <SelectTrigger id="create-category">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>

              <SelectContent>
                {FAQCategory.map((item: { value: string; label: string }) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-2 mt-3">
            <Label htmlFor="create-status">Status</Label>

            <Select
              value={data?.status}
              onValueChange={(value: string) => onChange("status", value)}
            >
              <SelectTrigger id="create-status">
                <SelectValue placeholder="Select status" />
              </SelectTrigger>

              <SelectContent>
                {FAQStatus.map((item: { value: string; label: string }) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <DialogFooter>
          <Button
            variant="outline"
            onClick={() => {
              onOpenChange(false);
            }}
          >
            Cancel
          </Button>

          <Button
            onClick={onFAQCreated}
            className="bg-[#1DB954] hover:bg-[#1ed760] text-white"
            disabled={isLoading}
          >
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

export default CreateFAQDialog;