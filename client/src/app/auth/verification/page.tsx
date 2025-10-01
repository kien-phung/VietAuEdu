"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuthStore } from "@/utils/stores/authStore";
import type React from "react";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const VerificationPage: React.FC = () => {
  const { isLoading, verifyOTP } = useAuthStore();

  const router = useRouter();
  const [email, setEmail] = useState("");
  const [isPasswordReset, setIsPasswordReset] = useState(false);
  const [otp, setOtp] = useState<string[]>(Array(6).fill(""));

  const [isExpired, setIsExpired] = useState(false);
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes in seconds
  const [isClient, setIsClient] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Get email from URL params on client side only
  useEffect(() => {
    setIsClient(true);
    const urlParams = new URLSearchParams(window.location.search);
    const isPasswordResetParam = urlParams.get("isPasswordReset") === "true";
    const emailParam = urlParams.get("email");

    if (emailParam) {
      setEmail(emailParam);
    }

    if (emailParam) {
      setIsPasswordReset(isPasswordResetParam);
    }
  }, []);

  useEffect(() => {
    if (timeLeft <= 0) {
      setIsExpired(true);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value.substring(0, 1);
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();

    const pastedData = e.clipboardData.getData("text/plain").trim();

    // Check if pasted content is a 6-digit number
    if (/^\d{6}$/.test(pastedData)) {
      const newOtp = pastedData.split("");
      setOtp(newOtp);

      // Focus the last input
      inputRefs.current[5]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && otp[index] === "" && index > 0) {
      const prevInput = document.getElementById(`digit-${index - 1}`);
      if (prevInput) prevInput.focus();
    }
  };

  const validate = () => {
    if (otp.some((digit) => digit === "")) {
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    const res = await verifyOTP(email, otp.join(""));

    if (!res) {
      setOtp(Array(6).fill(""));
      return;
    }

    if (isExpired) {
      setOtp(Array(6).fill(""));
      return;
    }

    if (res?.status && res.status !== 200) {
      return;
    }

    if (isPasswordReset) {
      router.push(`/auth/reset-password/?email=${encodeURIComponent(email)}`);
    } else {
      toast.success("Xác thực tài khoản thành công");
      router.push("/auth/login");
    }
  };

  const handleResend = async () => {
    const { sendOTP } = useAuthStore.getState();
    const result = await sendOTP(email);

    if (result) {
      toast.done("Mã OTP đã được gửi");
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

  // Don't render anything on server side
  if (!isClient) {
    return null;
  }

  return (
    <div className="rounded-lg p-8">
      <h1 className="text-primary text-2xl font-bold text-center mb-6">
        Nhập mã xác thực
      </h1>

      <p className="text-gray-400 text-sm mb-2">
        Chúng tôi đã gửi mã OTP về email của bạn, hãy nhập mã đó vào các ô bên
        dưới để
        {isPasswordReset ? "đặt lại mật khẩu" : "xác thực tài khoản"}.
      </p>

      <div className="text-center mb-6">
        <p className="text-primary-400 text-sm">
          Mã hết hạn trong: {formatTime(timeLeft)}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mb-6 space-y-6">
        <div className="flex justify-between mb-6">
          {[0, 1, 2, 3, 4, 5].map((index) => (
            <Input
              key={index}
              ref={(el) => {
                inputRefs.current[index] = el;
              }}
              type="text"
              value={otp[index]}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              onPaste={index === 0 ? handlePaste : undefined}
              className={`w-12 h-12 text-center text-xl font-bold bg-[#282828] text-white border ${
                isExpired ? "border-red-500" : "border-[#3E3E3E]"
              } rounded-md focus:outline-none focus:ring-1 focus:ring-[#1877F2] focus:border-[#1877F2]`}
              maxLength={1}
              disabled={isExpired}
            />
          ))}
        </div>

        <Button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-md transition-colors duration-200"
          disabled={isLoading}
        >
          {isLoading ? "Đang xác thực..." : "Xác thực"}
        </Button>
      </form>

      <div className="text-center">
        <p className="text-gray-400 text-sm">
          Không nhận được mã?{" "}
          <button
            onClick={handleResend}
            className="text-primary-500 hover:text-primary-700 underline cursor-pointer"
          >
            Gửi lại mã
          </button>
        </p>
      </div>
    </div>
  );
};

export default VerificationPage;
