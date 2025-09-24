# Admin Layout Implementation

This document describes the admin layout implementation for the VietAuAcademy project.

## Features Implemented

1. **Dedicated Admin Layout**: Created a layout that wraps all pages in the `/admin` directory
2. **Collapsible Sidebar**: Sidebar can be toggled between expanded and collapsed states
3. **Resizable Sidebar**: Sidebar can be resized by dragging the right edge
4. **Responsive Design**: Uses TailwindCSS for responsive styling
5. **Persistent State**: Sidebar state (collapsed/expanded and width) is saved in localStorage
6. **Smooth Animations**: Transitions for collapsing/expanding and resizing
7. **Navigation Menu**: Includes links to all admin dashboards

## Components

### 1. Admin Layout (`/client/src/app/admin/layout.tsx`)

- Main layout component that wraps all admin pages
- Manages sidebar state (collapsed, width)
- Handles resizing functionality
- Persists state in localStorage

### 2. Admin Sidebar (`/client/src/components/layout/admin/AdminSidebar.tsx`)

- Sidebar component with navigation menu
- Toggle button for collapsing/expanding
- Resize handle for adjusting width
- Active link highlighting

## How It Works

1. The layout uses React hooks to manage state:

   - `useState` for sidebar state (collapsed, width)
   - `useRef` for tracking resize state
   - `useEffect` for event listeners and localStorage persistence

2. Resizing functionality:

   - Mouse down on the resize handle starts resizing
   - Mouse move adjusts the sidebar width (between 80px and 400px)
   - Mouse up stops resizing
   - Automatically collapses when width is less than 120px

3. State persistence:

   - Sidebar collapsed state and width are saved to localStorage
   - On page load, state is restored from localStorage

4. Dynamic imports:
   - AdminSidebar is dynamically imported to avoid SSR issues

## Usage

The layout automatically applies to all pages in the `/admin` directory. No additional configuration is needed.

## Menu Items

The sidebar includes navigation links to:

- Dashboard (/admin)
- Programs (/admin/program-dashboard)
- Jobs (/admin/job-dashboard)
- Messages (/admin/contact-dashboard)
- FAQ (/admin/faq-dashboard)
- Users (/admin/users)
- Settings (/admin/settings)

## Customization

To add new menu items, modify the `menuItems` array in `AdminSidebar.tsx`:

```typescript
const menuItems = [
  { icon: Home, label: "Dashboard", href: "/admin" },
  // Add new items here
];
```

## Technical Details

- Uses TailwindCSS for styling with responsive classes
- Implements smooth transitions with `transition-all duration-300`
- Uses `position: fixed` for the sidebar to ensure it stays in place during scrolling
- Leverages Next.js dynamic imports for better performance
- Follows React best practices for state management
