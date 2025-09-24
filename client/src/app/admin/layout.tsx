"use client";

import { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";

const AdminSidebar = dynamic(
  () => import("@/components/layout/admin/AdminSidebar"),
  {
    ssr: false,
    loading: () => (
      <div className="w-20 md:w-80 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 fixed h-full" />
    ),
  }
);

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState(280);
  const isResizing = useRef(false);

  // Load sidebar state from localStorage on mount
  useEffect(() => {
    const savedCollapsed = localStorage.getItem("adminSidebarCollapsed");
    const savedWidth = localStorage.getItem("adminSidebarWidth");

    if (savedCollapsed !== null) {
      setSidebarCollapsed(JSON.parse(savedCollapsed));
    }

    if (savedWidth !== null) {
      setSidebarWidth(Math.max(80, Math.min(400, parseInt(savedWidth))));
    }
  }, []);

  // Save sidebar state to localStorage when it changes
  useEffect(() => {
    localStorage.setItem(
      "adminSidebarCollapsed",
      JSON.stringify(sidebarCollapsed)
    );
  }, [sidebarCollapsed]);

  useEffect(() => {
    if (sidebarWidth) {
      localStorage.setItem("adminSidebarWidth", sidebarWidth.toString());
    }
  }, [sidebarWidth]);

  const startResizing = (e: React.MouseEvent) => {
    e.preventDefault();
    isResizing.current = true;
  };

  const stopResizing = () => {
    isResizing.current = false;
  };

  const resize = (e: MouseEvent) => {
    if (isResizing.current) {
      const newWidth = Math.max(80, Math.min(400, e.clientX));
      setSidebarWidth(newWidth);
      setSidebarCollapsed(newWidth < 120);
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", resize);
    window.addEventListener("mouseup", stopResizing);
    return () => {
      window.removeEventListener("mousemove", resize);
      window.removeEventListener("mouseup", stopResizing);
    };
  }, []);

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      {typeof window !== "undefined" && (
        <AdminSidebar
          collapsed={sidebarCollapsed}
          width={sidebarWidth}
          onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
          onStartResizing={startResizing}
        />
      )}
      <div
        className="flex-1 flex flex-col overflow-hidden transition-all duration-300"
        style={{
          marginLeft: sidebarCollapsed ? "80px" : `${sidebarWidth}px`,
        }}
      >
        <main className="flex-1 overflow-y-auto p-4 md:p-6 bg-gray-50 dark:bg-gray-900">
          {children}
        </main>
      </div>
    </div>
  );
}
