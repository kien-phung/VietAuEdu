import { Fragment, useState, useRef, ChangeEvent, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Save, Image as ImageIcon } from "lucide-react";
import Image from "next/image";

interface UpdateProgramDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onChange: (
    field: keyof IProgram,
    value: string | string[] | boolean | File | null
  ) => void;
  data: IProgram | null;
  onProgramUpdated: () => void;
  isLoading: boolean;
}

const UpdateProgramDialog = ({
  isOpen,
  onOpenChange,
  onChange,
  data,
  onProgramUpdated,
  isLoading,
}: UpdateProgramDialogProps) => {
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

  useEffect(() => {
    // Hiển thị hình ảnh hiện tại nếu có
    if (data?.imageUrl) {
      setPreviewImage(data.imageUrl);
    } else {
      setPreviewImage(null);
    }
  }, [data?.imageUrl]);

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
                  Update Program
                </Dialog.Title>

                <ScrollArea className="h-[42vh] pr-4 mt-4">
                  {data && (
                    <>
                      <div className="grid gap-4">
                        <div className="grid gap-2">
                          <Label htmlFor="update-title">Title</Label>
                          <Input
                            id="update-title"
                            value={data.title || ""}
                            onChange={(e) => onChange("title", e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="grid gap-4">
                        <div className="grid gap-2">
                          <Label htmlFor="update-description">
                            Description
                          </Label>
                          <Textarea
                            id="update-description"
                            value={data.description || ""}
                            onChange={(e) =>
                              onChange("description", e.target.value)
                            }
                          />
                        </div>
                      </div>

                      <div className="grid gap-4">
                        <div className="grid gap-2">
                          <Label htmlFor="update-country">Country</Label>
                          <Input
                            id="update-country"
                            value={data.country || ""}
                            onChange={(e) =>
                              onChange("country", e.target.value)
                            }
                          />
                        </div>
                      </div>

                      <div className="grid gap-4">
                        <div className="grid gap-2">
                          <Label htmlFor="update-duration">Duration</Label>
                          <Input
                            id="update-duration"
                            value={data.duration || ""}
                            onChange={(e) =>
                              onChange("duration", e.target.value)
                            }
                          />
                        </div>
                      </div>

                      <div className="grid gap-4">
                        <div className="grid gap-2">
                          <Label htmlFor="update-tuition">Tuition</Label>
                          <Input
                            id="update-tuition"
                            value={data.tuition || ""}
                            onChange={(e) =>
                              onChange("tuition", e.target.value)
                            }
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
                              {data.imageUrl ? "Change Image" : "Upload Image"}
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
                          <Label htmlFor="update-requirements">
                            Requirements
                          </Label>
                          <Input
                            id="update-requirements"
                            value={data.requirements?.join(", ") || ""}
                            onChange={(e) =>
                              onChange(
                                "requirements",
                                e.target.value
                                  .split(",")
                                  .map((item) => item.trim())
                              )
                            }
                            placeholder="Separate requirements with commas"
                          />
                        </div>
                      </div>

                      <div className="grid gap-4">
                        <div className="grid gap-2">
                          <Label htmlFor="update-benefits">Benefits</Label>
                          <Input
                            id="update-benefits"
                            value={data.benefits?.join(", ") || ""}
                            onChange={(e) =>
                              onChange(
                                "benefits",
                                e.target.value
                                  .split(",")
                                  .map((item) => item.trim())
                              )
                            }
                            placeholder="Separate benefits with commas"
                          />
                        </div>
                      </div>

                      <div className="grid gap-2 mt-3">
                        <Label htmlFor="update-featured">Featured</Label>
                        <Select
                          value={data.featured ? "true" : "false"}
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

                      <div className="grid gap-2 mt-3">
                        <Label htmlFor="update-status">Status</Label>
                        <Select
                          value={data.status || "inactive"}
                          onValueChange={(value: string) =>
                            onChange("status", value as "active" | "inactive")
                          }
                        >
                          <SelectTrigger id="update-status">
                            <SelectValue placeholder="Select status" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="active">Active</SelectItem>
                            <SelectItem value="inactive">Inactive</SelectItem>
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
                    className="bg-gray-200 border-gray-300 text-gray-700 hover:bg-red-200 hover:text-red-600 hover:border-red-200 dark:bg-transparent dark:border-gray-700 dark:text-white dark:hover:bg-red-900 dark:hover:text-white"
                  >
                    Cancel
                  </Button>

                  <Button onClick={onProgramUpdated} disabled={isLoading}>
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

export default UpdateProgramDialog;
