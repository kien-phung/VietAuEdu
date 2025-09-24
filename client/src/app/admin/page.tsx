"use client";

import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Users,
  Eye,
  FileText,
  MessageSquare,
  Briefcase,
  Calendar,
  TrendingUp,
  BarChart3,
} from "lucide-react";

// Mock data - in a real app, this would come from an API
const mockStats = {
  totalVisitors: 12543,
  uniqueVisitors: 8742,
  pageViews: 45892,
  avgSessionDuration: "3m 42s",
  bounceRate: "32.4%",
  topPages: [
    { name: "Homepage", views: 12450 },
    { name: "Programs", views: 8765 },
    { name: "Jobs", views: 6543 },
    { name: "Contact", views: 4321 },
    { name: "FAQ", views: 3210 },
  ],
  recentActivity: [
    { id: 1, action: "New user registered", time: "2 min ago" },
    { id: 2, action: "Job application submitted", time: "15 min ago" },
    { id: 3, action: "Contact form submitted", time: "1 hour ago" },
    { id: 4, action: "New blog post published", time: "3 hours ago" },
  ],
};

export default function AdminDashboardPage() {
  const [stats] = useState(mockStats);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome to your admin dashboard. Here&apos;s what&apos;s happening
          today.
        </p>
        {/* Note: This page is now using the new Admin Layout with collapsible and resizable sidebar */}
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-primary text-primary-foreground">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Visitors
            </CardTitle>
            <Users className="h-4 w-4 opacity-70" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {stats.totalVisitors.toLocaleString()}
            </div>
            <p className="text-xs opacity-80">+12% from last month</p>
          </CardContent>
        </Card>

        <Card className="bg-primary text-primary-foreground">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Unique Visitors
            </CardTitle>
            <Eye className="h-4 w-4 opacity-70" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {stats.uniqueVisitors.toLocaleString()}
            </div>
            <p className="text-xs opacity-80">+8% from last month</p>
          </CardContent>
        </Card>

        <Card className="bg-primary text-primary-foreground">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Page Views</CardTitle>
            <FileText className="h-4 w-4 opacity-70" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {stats.pageViews.toLocaleString()}
            </div>
            <p className="text-xs opacity-80">+18% from last month</p>
          </CardContent>
        </Card>

        <Card className="bg-primary text-primary-foreground">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Session</CardTitle>
            <TrendingUp className="h-4 w-4 opacity-70" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.avgSessionDuration}</div>
            <p className="text-xs opacity-80">+24s from last month</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts and Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Top Pages */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Top Pages</CardTitle>
            <CardDescription>Most visited pages this month</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {stats.topPages.map((page, index) => (
                <div key={index} className="flex items-center">
                  <div className="flex-1">
                    <p className="font-medium">{page.name}</p>
                    <div className="w-full bg-secondary rounded-full h-2 mt-1">
                      <div
                        className="bg-primary h-2 rounded-full"
                        style={{
                          width: `${
                            (page.views / stats.topPages[0].views) * 100
                          }%`,
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className="ml-4 text-right">
                    <p className="font-medium">{page.views.toLocaleString()}</p>
                    <p className="text-sm text-muted-foreground">views</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest actions on your site</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {stats.recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-start">
                  <div className="bg-secondary p-2 rounded-full mr-3">
                    {activity.id === 1 && <Users className="h-4 w-4" />}
                    {activity.id === 2 && <Briefcase className="h-4 w-4" />}
                    {activity.id === 3 && <MessageSquare className="h-4 w-4" />}
                    {activity.id === 4 && <FileText className="h-4 w-4" />}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">{activity.action}</p>
                    <p className="text-sm text-muted-foreground">
                      {activity.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Additional Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Engagement Metrics</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-4">
            <div className="flex flex-col items-center justify-center p-4 bg-secondary rounded-lg">
              <BarChart3 className="h-8 w-8 mb-2 text-primary" />
              <p className="text-2xl font-bold">{stats.bounceRate}</p>
              <p className="text-sm text-muted-foreground">Bounce Rate</p>
            </div>
            <div className="flex flex-col items-center justify-center p-4 bg-secondary rounded-lg">
              <Calendar className="h-8 w-8 mb-2 text-primary" />
              <p className="text-2xl font-bold">4.2m</p>
              <p className="text-sm text-muted-foreground">Avg. Time</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
            <Button className="w-full justify-start">
              <FileText className="mr-2 h-4 w-4" />
              View all programs
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <Briefcase className="mr-2 h-4 w-4" />
              Manage job listings
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <MessageSquare className="mr-2 h-4 w-4" />
              Check messages
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <Users className="mr-2 h-4 w-4" />
              View user accounts
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
