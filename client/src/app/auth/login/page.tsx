"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuthStore } from "@/utils/stores/authStore";
import type React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";

const LoginPage: React.FC = () => {
  const { isLoading, login, sendOTP } = useAuthStore();

  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
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

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    const response = await login(formData.email, formData.password);
    if (!response) {
      return;
    }

    // If login is successful with active user
    if (response.data && response.data.isActive) {
      router.push("/admin");
      return;
    }
    console.log(">>>", response);
    // If user is not active, send OTP and redirect to verification
    if (
      response.message === "User is not active" ||
      response.error === "User is not active" ||
      (response.data && !response.data.isActive)
    ) {
      console.log("User is not active, sending OTP...");
      await sendOTP(formData.email);
      router.push(
        `/auth/verification?email=${encodeURIComponent(
          formData.email
        )}&isPasswordReset=false`
      );
      return;
    }

    // Other errors are handled by the store
  };

  return (
    <div>
      <h1 className="text-primary text-2xl font-bold text-center mb-8">
        Log in
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-primary-500 mb-2"
          >
            Email
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-400">{errors.email}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-primary-500 mb-2"
          >
            Password
          </label>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400"
          />
          {errors.password && (
            <p className="mt-1 text-sm text-red-400">{errors.password}</p>
          )}
        </div>

        <div className="mb-6">
          <a
            onClick={(e) => {
              e.preventDefault();

              if (!isLoading) router.push("/auth/forgot-password");
            }}
            className={`text-primary-500 hover:text-primary-700 text-sm underline cursor-pointer ${
              isLoading ? "pointer-events-none opacity-70" : ""
            }`}
          >
            Forgot your password?
          </a>
        </div>

        <Button
          type="submit"
          className="w-full bg-secondary hover:bg-secondary-700 text-white font-medium py-3 px-4 rounded-md transition-colors duration-200"
          disabled={isLoading}
        >
          {isLoading ? "Logging in..." : "Log in"}
        </Button>
      </form>
    </div>
  );
};

export default LoginPage;
