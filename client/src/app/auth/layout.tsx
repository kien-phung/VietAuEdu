import { ReactNode } from 'react';

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
      <div className="w-full max-w-md mx-auto">
        <div className="bg-gray-800 rounded-lg shadow-xl p-8 border border-gray-700">
          {children}
        </div>
      </div>
    </div>
  );
}