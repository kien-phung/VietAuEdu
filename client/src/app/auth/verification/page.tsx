"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuthStore } from "@/utils/stores/authStore";
import type React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const VerificationPage: React.FC = () => {
  const { isLoading, verifyOTP } = useAuthStore();

  const email =
    new URLSearchParams(window.location.search).get("email") || "your email";
  const router = useRouter();
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes in seconds

  const handleInputChange = (index: number, value: string) => {
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // Auto-focus next input
    if (value.length === 1 && index < 5) {
      const nextInput = document.getElementById(`digit-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && code[index] === "" && index > 0) {
      const prevInput = document.getElementById(`digit-${index - 1}`);
      if (prevInput) prevInput.focus();
    }
  };

  const validate = () => {
    if (code.some((digit) => digit === "")) {
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    const otp = code.join("");
    const res = await verifyOTP(email, otp);

    if (!res) {
      return;
    }

    // Redirect based on context
    const urlParams = new URLSearchParams(window.location.search);
    const isPasswordReset = urlParams.get("isPasswordReset") === "true";

    if (isPasswordReset) {
      router.push("/auth/reset-password");
    } else {
      router.push("/"); // Or the appropriate homepage after verification
    }
  };

  const handleResend = async () => {
    const { sendOTP } = useAuthStore.getState();
    const result = await sendOTP(email);

    if (result) {
      alert("Code resent successfully!");
    }
  };

  // Timer logic
  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <div className="bg-gray-800 rounded-lg p-8">
      <h1 className="text-primary text-2xl font-bold text-center mb-6">
        Enter verification code
      </h1>

      <p className="text-primary-400 text-sm mb-6 text-center">
        We&apos;ve sent a verification code to {email}
        Enter the code below to verify your account.
      </p>

      <div className="text-center mb-6">
        <p className="text-primary-400 text-sm">
          Code expires in: {formatTime(timeLeft)}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mb-6 space-y-6">
        <div className="flex justify-center space-x-2 mb-6">
          {code.map((digit, index) => (
            <Input
              key={index}
              id={`digit-${index}`}
              type="number"
              maxLength={1}
              value={digit}
              onChange={(e) => handleInputChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className="w-12 h-12 text-center bg-gray-700 border-gray-600 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500 rounded-lg"
            />
          ))}
        </div>

        <Button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-md transition-colors duration-200"
          disabled={isLoading}
        >
          {isLoading ? "Verifying..." : "Verify"}
        </Button>
      </form>

      <div className="text-center">
        <p className="text-gray-400 text-sm">
          Didn&apos;t receive a code?{" "}
          <button
            onClick={handleResend}
            className="text-primary-500 hover:text-primary-700 underline cursor-pointer"
          >
            Resend code
          </button>
        </p>
      </div>
    </div>
  );
};

export default VerificationPage;
