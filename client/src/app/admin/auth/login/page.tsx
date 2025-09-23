"use client";

import { GoogleLoginButton } from "@/components/common/admin/auth/Oauth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuthStore } from "@/utils/stores/authStore";
import type React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";

const LoginPage: React.FC = () => {
  const router = useRouter();
  const { isLoading, login } = useAuthStore();

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

    if (!response || !response.data) {
      return;
    }

    const { user, isActive } = response.data as { user: IUser; isActive: boolean };

    if (!user) {
      return;
    }

    if (!isActive) {
      router.push(`/verify-otp?email=${encodeURIComponent(user?.email || "")}&isPasswordReset=false`);
      return;
    }

    router.push("/");
  };

  return (
    <>
      <h1 className="text-facebook text-2xl font-bold text-center mb-8">
        Log in to Facebook
      </h1>

      <form onSubmit={handleSubmit} className="w-full mx-auto">
        <Input
          type="text"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />

        <Input
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />

        <div className="mb-6">
          <a
            onClick={(e) => {
              e.preventDefault();

              if (!isLoading) router.push("/forgot-password");
            }}
            className={`text-[#1877F2] hover:text-[#166FE5] text-sm underline cursor-pointer ${
              isLoading ? "pointer-events-none opacity-70" : ""
            }`}
          >
            Forgot your password?
          </a>
        </div>

        <Button
          type="submit"
          className="w-full login-button"
        >
          Log in
        </Button>
      </form>

      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-600" />
        </div>

        <div className="relative flex justify-center">
          <span className="bg-[#121212] px-4 text-sm text-gray-400">OR</span>
        </div>
      </div>

      <GoogleLoginButton />

      <div className="text-center">
        <p className="text-white text-sm">
          {"Don't have an account? "}
          <a
            onClick={() => router.push("/register")}
            className="text-[#1877F2] hover:text-[#166FE5] underline cursor-pointer"
          >
            Register for Facebook
          </a>
        </p>
      </div>
    </>
  );
};

export default LoginPage;