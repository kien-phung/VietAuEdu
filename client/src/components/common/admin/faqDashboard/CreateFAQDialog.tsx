import { Loader2 } from "lucide-react";
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
import { EStatus } from "@/utils/types/enum";
import { FAQCategory, FAQStatus } from "@/utils/constants/faqConstants";

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
      <DialogContent className="sm:max-w-[525px] bg-white dark:bg-gray-800">
        <DialogHeader>
          <DialogTitle className="text-primary">Create</DialogTitle>

          <DialogDescription className="text-primary-200">
            Create a new FAQ.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="create-question" className="text-primary">
                Question
              </Label>

              <Input
                id="create-question"
                value={data?.question || ""}
                onChange={(e) => onChange("question", e.target.value)}
              />
            </div>
          </div>

          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="create-answer" className="text-primary">
                Answer
              </Label>

              <Input
                id="create-answer"
                value={data?.answer || ""}
                onChange={(e) => onChange("answer", e.target.value)}
              />
            </div>
          </div>

          <div className="grid gap-2 mt-3">
            <Label htmlFor="create-category" className="text-primary">
              Category
            </Label>

            <Select
              value={data?.category || FAQCategory[0].value}
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
            <Label htmlFor="create-status" className="text-primary">
              Status
            </Label>

            <Select
              value={data?.status || EStatus.ACTIVE}
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
            className="bg-gray-200 border-gray-300 text-gray-700 hover:bg-red-200 hover:text-red-600 hover:border-red-200 dark:bg-transparent dark:border-gray-700 dark:text-white dark:hover:bg-red-900 dark:hover:text-white"
          >
            Cancel
          </Button>

          <Button type="submit" disabled={isLoading} onClick={onFAQCreated}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Creating...
              </>
            ) : (
              "Create FAQ"
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CreateFAQDialog;
