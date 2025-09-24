"use client";

export default function AdminTestPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Layout Test</h1>
      <p className="mb-4">This page tests the admin layout functionality.</p>
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-2">Features to Test</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Sidebar should be visible on the left</li>
          <li>Sidebar should be collapsible using the toggle button</li>
          <li>Sidebar should be resizable by dragging the right edge</li>
          <li>Main content should adjust when sidebar is resized</li>
          <li>Sidebar state should persist between page navigations</li>
        </ul>
      </div>
    </div>
  );
}
