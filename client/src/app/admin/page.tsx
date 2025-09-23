import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Dashboard - VietAuEdu",
  description: "Admin dashboard for managing VietAuEdu content",
};

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <section className="bg-gradient-to-r from-primary to-secondary py-16">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Admin Dashboard
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Manage your VietAuEdu content
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}