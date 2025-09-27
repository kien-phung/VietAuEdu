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
import { Save, Image as ImageIcon } from "lucide-react";
import { useState, useRef, ChangeEvent } from "react";
import Image from "next/image";

interface CreateProgramDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onChange: (
    field: keyof IProgram,
    value: string | string[] | boolean | File | null
  ) => void;
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
                <Label htmlFor="create-image">Image</Label>
                <div className="flex flex-col gap-2">
                  <input
                    type="file"
                    id="create-image"
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
            className="bg-gray-50 border-gray-300 text-gray-700 hover:bg-red-200 hover:text-red-600 hover:border-red-200 dark:bg-transparent dark:border-gray-700 dark:text-white dark:hover:bg-red-900 dark:hover:text-white"
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
