import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Button } from "@/components/ui/button";
import { SendHorizontal } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface IContactDetailsDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  selectedContact: IContact | null;
  message: string | null;
  handleMessageChange: (value: string | null) => void;
  handleRespondContact: () => void;
  isResponding: boolean;
}

const ContactDetailsDialog = ({
  isOpen,
  onOpenChange,
  selectedContact,
  message,
  handleMessageChange,
  handleRespondContact,
  isResponding,
}: IContactDetailsDialogProps) => {
  if (!selectedContact) return null;

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        onClose={() => onOpenChange(false)}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            className="fixed inset-0 bg-black bg-opacity-30"
            aria-hidden="true"
          />
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
              <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white dark:bg-gray-800 p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title className="text-lg font-bold text-gray-900 dark:text-white">
                  Artist Application Details
                </Dialog.Title>
                <Dialog.Description className="text-gray-700 dark:text-gray-300">
                  Review the artist application from {selectedContact?.name}
                </Dialog.Description>

                <ScrollArea className="h-[calc(85vh-10rem)] overflow-auto">
                  <div className="grid gap-6 py-4 px-1">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-lg font-semibold mb-2 text-white">
                          Content
                        </h3>

                        <p className="text-sm text-white">
                          {selectedContact?.message}
                        </p>

                        <div className="grid gap-2">
                          <Label
                            htmlFor="rejection-details"
                            className="text-white"
                          >
                            Additional Details
                          </Label>

                          <Textarea
                            id="rejection-details"
                            placeholder="Provide additional feedback"
                            rows={4}
                            value={message || ""}
                            onChange={(
                              e: React.ChangeEvent<HTMLTextAreaElement>
                            ) => handleMessageChange(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollArea>

                <div className="flex justify-between sm:justify-between p-4">
                  <Button
                    variant="outline"
                    onClick={() => onOpenChange(false)}
                    className="bg-gray-50 border-gray-300 text-gray-700 hover:bg-red-200 hover:text-red-600 hover:border-red-200 dark:bg-transparent dark:border-gray-700 dark:text-white dark:hover:bg-red-900 dark:hover:text-white"
                  >
                    Close
                  </Button>

                  <Button
                    variant="destructive"
                    onClick={() => handleRespondContact()}
                    className="text-white"
                    disabled={!message || isResponding}
                  >
                    {isResponding ? (
                      <>Rejecting...</>
                    ) : (
                      <>
                        <SendHorizontal className="h-4 w-4" />
                        Reject
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

export default ContactDetailsDialog;
