"use client"

import { OverviewCards } from "@/components/dashboard/overview-cards"
import { RecentSales } from "@/components/dashboard/recent-sales"
import { AnalyticsChart } from "@/components/dashboard/analytics-chart"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Download, CalendarIcon } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { toast } from "sonner"
import { AnalyticsDetails } from "@/components/dashboard/analytics-details"

export default function Home() {
  const handleDownload = () => {
    toast.success("Downloading report...", {
      description: "Your report is being prepared and will start downloading shortly.",
    })
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <div className="flex items-center space-x-2">
          <Popover>
            <PopoverTrigger className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                <CalendarIcon className="mr-2 h-4 w-4" />
                <span>Jan 20, 2024 - Feb 09, 2024</span>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="end">
              <Calendar mode="range" />
            </PopoverContent>
          </Popover>
          <Button size="sm">
            <Download className="mr-2 h-4 w-4" />
            Download
          </Button>
        </div>
      </div>
      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="reports" disabled>Reports</TabsTrigger>
          <TabsTrigger value="notifications" disabled>Notifications</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-6">
          <OverviewCards />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
            <AnalyticsChart className="col-span-4" />
            <RecentSales className="col-span-3" />
          </div>
        </TabsContent>
        <TabsContent value="analytics" className="space-y-6">
           <AnalyticsDetails />
        </TabsContent>
      </Tabs>
    </div>
  )
}
