"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuthStore } from "@/utils/stores/authStore";
import type React from "react";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";


// ... existing code ...
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
    <div>
      <h1 className="text-primary text-2xl font-bold text-center mb-8">
        Reset your password
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="newPassword" className="block text-sm font-medium text-primary-500 mb-2">
            New Password
          </label>
          <Input
            id="newPassword"
            name="newPassword"
            type="password"
            placeholder="Enter new password"
            value={formData.newPassword}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400"
          />
          {errors.newPassword && <p className="mt-1 text-sm text-red-400">{errors.newPassword}</p>}
        </div>

        <div>
          <label htmlFor="rePassword" className="block text-sm font-medium text-primary-500 mb-2">
            Confirm Password
          </label>
          <Input
            id="rePassword"
            name="rePassword"
            type="password"
            placeholder="Confirm new password"
            value={formData.rePassword}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400"
          />
          {errors.rePassword && <p className="mt-1 text-sm text-red-400">{errors.rePassword}</p>}
        </div>

        <Button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-md transition-colors duration-200"
          // disabled={isLoading}
        >
          Reset Password
        </Button>
      </form>
    </div>
  );
};

export default ResetPasswordPage;