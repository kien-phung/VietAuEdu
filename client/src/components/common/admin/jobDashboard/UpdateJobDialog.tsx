import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Button } from "@/components/ui/button";
import { Save } from "lucide-react";
import { JobStatus } from "@/utils/constants/jobConstants";
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

interface UpdateJobDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onChange: (
    field: keyof IJob,
    value: string | number | boolean | string[]
  ) => void;
  data: IJob | null;
  onJobUpdated: () => void;
  isLoading: boolean;
}

const UpdateJobDialog = ({
  isOpen,
  onOpenChange,
  onChange,
  data,
  onJobUpdated,
  isLoading,
}: UpdateJobDialogProps) => {
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
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-[#121212] p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-white"
                >
                  Update IJob
                </Dialog.Title>

                <ScrollArea className="h-[42vh] pr-4 mt-4">
                  {data && (
                    <>
                      <div className="grid gap-4">
                        <div className="grid gap-2">
                          <Label htmlFor="update-title">Title</Label>

                          <Input
                            id="update-title"
                            value={data?.title || ""}
                            onChange={(
                              e: React.ChangeEvent<HTMLInputElement>
                            ) => onChange("title", e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="grid gap-4">
                        <div className="grid gap-2">
                          <Label htmlFor="update-country">Country</Label>

                          <Input
                            id="update-country"
                            value={data?.country || ""}
                            onChange={(
                              e: React.ChangeEvent<HTMLInputElement>
                            ) => onChange("country", e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="grid gap-4">
                        <div className="grid gap-2">
                          <Label htmlFor="update-positions">Positions</Label>

                          <Input
                            id="update-positions"
                            type="number"
                            value={data?.positions || ""}
                            onChange={(
                              e: React.ChangeEvent<HTMLInputElement>
                            ) =>
                              onChange(
                                "positions",
                                parseInt(e.target.value) || 0
                              )
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
                            onChange={(e) =>
                              onChange("location", e.target.value)
                            }
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
                            onChange={(
                              e: React.ChangeEvent<HTMLInputElement>
                            ) =>
                              onChange(
                                "requirements",
                                e.target.value
                                  .split(", ")
                                  .filter((item) => item.trim())
                              )
                            }
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
                            onChange={(
                              e: React.ChangeEvent<HTMLInputElement>
                            ) =>
                              onChange(
                                "benefits",
                                e.target.value
                                  .split(", ")
                                  .filter((item) => item.trim())
                              )
                            }
                          />
                        </div>
                      </div>

                      <div className="grid gap-4">
                        <div className="grid gap-2">
                          <Label htmlFor="update-company">company</Label>

                          <Input
                            id="update-company"
                            value={data?.company}
                            onChange={(e) =>
                              onChange("company", e.target.value)
                            }
                          />
                        </div>
                      </div>

                      <div className="grid gap-4">
                        <div className="grid gap-2">
                          <Label htmlFor="update-workType">workType</Label>

                          <Input
                            id="update-workType"
                            value={data?.workType}
                            onChange={(e) =>
                              onChange("workType", e.target.value)
                            }
                          />
                        </div>
                      </div>

                      <div className="grid gap-4">
                        <div className="grid gap-2">
                          <Label htmlFor="update-featured">Featured</Label>

                          <Select
                            value={data?.featured ? "true" : "false"}
                            onValueChange={(value: string) =>
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
                          <Label htmlFor="update-workingHours">
                            workingHours
                          </Label>

                          <Input
                            id="update-workingHours"
                            value={data?.workingHours}
                            onChange={(e) =>
                              onChange("workingHours", e.target.value)
                            }
                          />
                        </div>
                      </div>

                      <div className="grid gap-4">
                        <div className="grid gap-2">
                          <Label htmlFor="update-overtime">overtime</Label>

                          <Input
                            id="update-overtime"
                            value={data?.overtime}
                            onChange={(e) =>
                              onChange("overtime", e.target.value)
                            }
                          />
                        </div>
                      </div>

                      <div className="grid gap-4">
                        <div className="grid gap-2">
                          <Label htmlFor="update-accommodation">
                            accommodation
                          </Label>

                          <Input
                            id="update-accommodation"
                            value={data?.accommodation}
                            onChange={(e) =>
                              onChange("accommodation", e.target.value)
                            }
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
                            onChange={(e) =>
                              onChange("workEnvironment", e.target.value)
                            }
                          />
                        </div>
                      </div>

                      <div className="grid gap-4">
                        <div className="grid gap-2">
                          <Label htmlFor="update-training-period">
                            Training Period
                          </Label>

                          <Input
                            id="update-training-period"
                            value={data?.trainingPeriod}
                            onChange={(e) =>
                              onChange("trainingPeriod", e.target.value)
                            }
                          />
                        </div>
                      </div>

                      <div className="grid gap-2 mt-3">
                        <Label htmlFor="update-country">Status</Label>

                        <Select
                          value={data?.status}
                          onValueChange={(value: string) =>
                            onChange("status", value)
                          }
                        >
                          <SelectTrigger id="update-status">
                            <SelectValue placeholder="Select a status" />
                          </SelectTrigger>

                          <SelectContent>
                            {JobStatus.map((item: { value: string; label: string }) => (
                              <SelectItem key={item.value} value={item.value}>
                                {item.label}
                              </SelectItem>
                            ))}
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
                    className="border-gray-700 text-white hover:bg-red-500 hover:text-white"
                  >
                    Cancel
                  </Button>

                  <Button
                    onClick={() => onJobUpdated()}
                    className="bg-[#1DB954] hover:bg-[#1ed760] text-white"
                    disabled={isLoading}
                  >
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

export default UpdateJobDialog;
