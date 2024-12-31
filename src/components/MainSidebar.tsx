"use client"

import * as React from "react"
import {
  BarChart2,
  Calendar,
  ChartLine,
  CreditCard,
  DollarSign,
  Globe,
  HelpCircle,
  PieChart,
  Settings,
  TrendingUp,
  Users,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { SidebarUser } from "@/components/SidebarUser"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// Sample data structured for the expense tracker context.
const data = {
  user: {
    name: "financeGuru",
    email: "finance@example.com",
    avatar: "/avatars/user.jpg",
  },
  teams: [
    {
      name: "Personal Finance",
      logo: DollarSign,
      plan: "Premium",
    },
    {
      name: "Family Budget",
      logo: Users,
      plan: "Basic",
    },
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: BarChart2,
      isActive: true,
      items: [
        {
          title: "Overview",
          url: "/dashboard/overview",
        },
        {
          title: "Insights",
          url: "/dashboard/insights",
        },
      ],
    },
    {
      title: "Transactions",
      url: "/transactions",
      icon: CreditCard,
      items: [
        {
          title: "Add Entry",
          url: "/transactions/add",
        },
        {
          title: "View All",
          url: "/transactions/view",
        },
      ],
    },
    {
      title: "Analytics",
      url: "/analytics",
      icon: PieChart,
      items: [
        {
          title: "Spending Trends",
          url: "/analytics/spending",
        },
        {
          title: "Income Patterns",
          url: "/analytics/income",
        },
      ],
    },
    {
      title: "Investments",
      url: "/investments",
      icon: TrendingUp,
      items: [
        {
          title: "Mutual Funds",
          url: "/investments/mutual-funds",
        },
        {
          title: "Stocks",
          url: "/investments/stocks",
        },
        {
          title: "Portfolio",
          url: "/investments/portfolio",
        },
      ],
    },
    {
      title: "Budget",
      url: "/budget",
      icon: DollarSign,
      items: [
        {
          title: "Set Budget",
          url: "/budget/set",
        },
        {
          title: "Track Spending",
          url: "/budget/track",
        },
      ],
    },
    {
      title: "Trip Manager",
      url: "/trip-manager",
      icon: Calendar,
      items: [
        {
          title: "Plan Trip",
          url: "/trip-manager/plan",
        },
        {
          title: "Shared Expenses",
          url: "/trip-manager/shared",
        },
      ],
    },
    {
      title: "Settings",
      url: "/settings",
      icon: Settings,
      items: [
        {
          title: "Profile",
          url: "/settings/profile",
        },
        {
          title: "Notifications",
          url: "/settings/notifications",
        },
        {
          title: "Integrations",
          url: "/settings/integrations",
        },
      ],
    },
    {
      title: "Help & Support",
      url: "/help",
      icon: HelpCircle,
      items: [
        {
          title: "FAQs",
          url: "/help/faqs",
        },
        {
          title: "Contact Support",
          url: "/help/contact",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Personal Savings Tracker",
      url: "/projects/savings",
      icon: ChartLine,
    },
    {
      name: "Family Expense Planner",
      url: "/projects/family",
      icon: Globe,
    },
  ],
}

export function MainSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props} >
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter className="mb-16">
        <SidebarUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
