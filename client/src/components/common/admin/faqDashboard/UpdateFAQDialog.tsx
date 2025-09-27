import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Button } from "@/components/ui/button";
import { Save } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FAQCategory, FAQStatus } from "./CreateFAQDialog";

interface UpdateFAQDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onChange: (field: keyof IFAQ, value: string) => void;
  data: IFAQ | null;
  onFAQUpdated: () => void;
  isLoading: boolean;
}

const UpdateFAQDialog = ({
  isOpen,
  onOpenChange,
  onChange,
  data,
  onFAQUpdated,
  isLoading,
}: UpdateFAQDialogProps) => {
  const handleClose = () => {
    onOpenChange(false);
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={handleClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white dark:bg-gray-800 p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900 dark:text-white"
                >
                  Update IFAQ
                </Dialog.Title>

                <ScrollArea className="h-[42vh] pr-4 mt-4">
                  {data && (
                    <>
                      <div className="grid gap-4">
                        <div className="grid gap-2">
                          <Label htmlFor="update-question">Question</Label>

                          <Input
                            id="update-question"
                            value={data.question || ""}
                            onChange={(
                              e: React.ChangeEvent<HTMLInputElement>
                            ) => onChange("question", e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="grid gap-4">
                        <div className="grid gap-2">
                          <Label htmlFor="update-answer">Answer</Label>

                          <Input
                            id="update-answer"
                            value={data?.answer || ""}
                            onChange={(
                              e: React.ChangeEvent<HTMLInputElement>
                            ) => onChange("answer", e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="grid gap-2 mt-3">
                        <Label htmlFor="update-category">Category</Label>

                        <Select
                          value={data?.category}
                          onValueChange={(value: string) =>
                            onChange("category", value)
                          }
                        >
                          <SelectTrigger id="update-category">
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>

                          <SelectContent>
                            {FAQCategory.map(
                              (item: { value: string; label: string }) => (
                                <SelectItem key={item.value} value={item.value}>
                                  {item.label}
                                </SelectItem>
                              )
                            )}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="grid gap-2 mt-3">
                        <Label htmlFor="update-status">Status</Label>

                        <Select
                          value={data?.status}
                          onValueChange={(value: string) =>
                            onChange("status", value)
                          }
                        >
                          <SelectTrigger id="update-status">
                            <SelectValue placeholder="Select status" />
                          </SelectTrigger>

                          <SelectContent>
                            {FAQStatus.map(
                              (item: { value: string; label: string }) => (
                                <SelectItem key={item.value} value={item.value}>
                                  {item.label}
                                </SelectItem>
                              )
                            )}
                          </SelectContent>
                        </Select>
                      </div>
                    </>
                  )}
                </ScrollArea>

                {/* Footer */}
                <div className="mt-4 flex justify-end gap-2 pt-4 border-t border-gray-800">
                  <Button
                    variant="outline"
                    onClick={handleClose}
                    className="bg-gray-50 border-gray-300 text-gray-700 hover:bg-red-200 hover:text-red-600 hover:border-red-200 dark:bg-transparent dark:border-gray-700 dark:text-white dark:hover:bg-red-900 dark:hover:text-white"
                  >
                    Cancel
                  </Button>

                  <Button onClick={() => onFAQUpdated()} disabled={isLoading}>
                    {isLoading ? (
                      <>Saving...</>
                    ) : (
                      <>
                        <Save className="h-4 w-4" />
                        Save
                      </>
                    )}
                  </Button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default UpdateFAQDialog;
