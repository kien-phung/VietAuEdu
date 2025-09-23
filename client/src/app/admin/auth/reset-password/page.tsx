"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuthStore } from "@/utils/stores/authStore";
import type React from "react";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";


const ResetPasswordPage: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { forgotPassword } = useAuthStore();

  const email = searchParams.get("email") || "";

  const [formData, setFormData] = useState({
    newPassword: "",
    rePassword: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.newPassword) {
      newErrors.newPassword = "New password is required";
    } else if (formData.newPassword.length < 8) {
      newErrors.newPassword = "Password must be at least 8 characters";
    }

    if (!formData.rePassword) {
      newErrors.rePassword = "Please confirm your password";
    } else if (formData.newPassword !== formData.rePassword) {
      newErrors.rePassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    const res = await forgotPassword(email, formData.newPassword, formData.rePassword);

    if (!res) {
      return;
    }

    router.push("/login");
  };

  return (
    <>
      <h1 className="text-[#1877F2] text-2xl font-bold text-center mb-6">
        Reset your password
      </h1>

      <form onSubmit={handleSubmit}>
        <Input
          name="newPassword"
          placeholder="Enter new password"
          value={formData.newPassword}
          onChange={handleChange}
        />

        <Input
          name="rePassword"
          placeholder="Confirm new password"
          value={formData.rePassword}
          onChange={handleChange}
        />

        <Button
          type="submit"
          className="mt-6 mb-4 bg-[#1877F2] hover:bg-[#166FE5]"
        >
          Reset Password
        </Button>
      </form>
    </>
  );
};

export default ResetPasswordPage;