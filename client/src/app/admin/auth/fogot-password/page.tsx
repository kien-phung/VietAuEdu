"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuthStore } from "@/utils/stores/authStore";
import type React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";

const ForgotPasswordPage: React.FC = () => {
  const router = useRouter();

  const { isLoading, sendOTP } = useAuthStore();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (error) setError("");
  };

  const validate = () => {
    if (!email.trim()) {
      setError("Email is required");
      return false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Email is invalid");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    const res = await sendOTP(email);

    if (!res) {
      return;
    }

    // Navigate with query parameters instead of state
    router.push(`/verify-otp?email=${encodeURIComponent(email)}&isPasswordReset=true`);
  };

  return (
    <>
      <h1 className="text-[#1877F2] text-2xl font-bold text-center mb-6">
        Reset your password
      </h1>

      <p className="text-gray-400 text-sm mb-6">
        Enter your email address and we&apos;ll send you a code to reset your
        password.
      </p>

      <form onSubmit={handleSubmit}>
        <Input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleChange}
        />

        <Button
          type="submit"
          className="mt-6 mb-4 bg-[#1877F2] hover:bg-[#166FE5]"
        >
          Send code
        </Button>

        <div className="text-center">
          <a
            onClick={(e) => {
              e.preventDefault();

              if (!isLoading) router.push("/login");
            }}
            className={`text-white hover:text-[#1877F2] text-sm underline cursor-pointer ${
              isLoading ? "pointer-events-none opacity-70" : ""
            }`}
          >
            Back to login
          </a>
        </div>
      </form>
    </>
  );
};

export default ForgotPasswordPage;