"use client";

import { useCallback, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { useAuthStore } from "@/utils/stores/authStore";
import { useRouter } from "next/navigation";

declare global {
  interface Window {
    google: {
      accounts: {
        id: {
          initialize: (config: { client_id: string; callback: (response: GoogleResponse) => void }) => void;
          renderButton: (element: HTMLElement | null, options: { theme: string; size: string }) => void;
        };
      };
    };
  }
}

interface GoogleResponse {
  credential: string;
}

export interface UserData {
  family_name?: string;
  given_name?: string;
  email?: string;
  picture?: string;
}

const GoogleLoginButton = () => {
  const router = useRouter();
  const { loginGoogle } = useAuthStore();

  const handleSuccess = useCallback(
    async (response: GoogleResponse) => {
      if (response.credential) {
        const user: UserData = jwtDecode<UserData>(response.credential);

        if (
          !user.email
        ) {
          return;
        }

        const formData = new FormData();
        formData.append("email", user.email);

        const res = await loginGoogle(formData);

        if (res) {
          router.push("/");
        }
      } else {
        console.warn("No credential received from Google.");
      }
    },
    [loginGoogle, router]
  );

  useEffect(() => {
    const loadGoogleScript = () => {
      if (!window.google) {
        const script = document.createElement("script");
        script.src = "https://accounts.google.com/gsi/client";
        script.async = true;
        script.defer = true;
        script.onload = () => initializeGoogleLogin();
        document.body.appendChild(script);
      } else {
        initializeGoogleLogin();
      }
    };

    const initializeGoogleLogin = () => {
      if (window.google && window.google.accounts) {
        window.google.accounts.id.initialize({
          client_id: process.env.NEXT_PUBLIC_CLIENT_ID as string,
          callback: handleSuccess,
        });

        window.google.accounts.id.renderButton(
          document.getElementById("google-login-button"),
          { theme: "outline", size: "large" }
        );
      }
    };

    loadGoogleScript();
  }, [handleSuccess]);

  return (
    <div id="google-login-button" className="mb-4  flex justify-center"></div>
  );
};

export { GoogleLoginButton };