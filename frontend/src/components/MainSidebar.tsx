"use client";

import * as React from "react";

import {
  BarChart2,
  Calendar,
  CreditCard,
  DollarSign,
  HelpCircle,
  PieChart,
  Settings,
  TrendingUp,
  Languages,
  BadgeCheck,
  Bell,
  User,
} from "lucide-react";

import { SidebarUpperContent } from "@/components/SidebarUpperContent";

import { SidebarLowerContent } from "@/components/SidebarLowerContent";

import { SidebarUser } from "@/components/SidebarUser";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

export const data = {
  user: {
    name: "Wealth Radar User",

    email: "user@wealthradar.in",

    avatar: "/avatars/user.jpg",
  },

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
      ],
    },

    {
      title: "Transactions",

      url: "/dashboard/transactions",

      icon: CreditCard,

      items: [
        {
          title: "Add",

          url: "/dashboard/transactions/add",
        },

        {
          title: "View All",

          url: "/dashboard/transactions/view_all",
        },
      ],
    },

    {
      title: "Analytics",

      url: "/dashboard/analytics",

      icon: PieChart,

      items: [
        {
          title: "Spending Trends",

          url: "/dashboard/analytics/spending_trends",
        },

        {
          title: "Income Patterns",

          url: "/dashboard/analytics/income_patterns",
        },

        {
          title: "Auto Classification",

          url: "/dashboard/analytics/auto_classification",
        },
      ],
    },

    {
      title: "Investments",

      url: "/dashboard/investments",

      icon: TrendingUp,

      items: [
        {
          title: "Mutual Funds",

          url: "/dashboard/investments/mutual_funds",
        },

        {
          title: "Stocks",

          url: "/dashboard/investments/stocks",
        },

        {
          title: "IPO",

          url: "/dashboard/investments/ipos",
        },

        {
          title: "FDs",

          url: "/dashboard/investments/fds",
        },
      ],
    },

    {
      title: "Budget",

      url: "/dashboard/budget",

      icon: DollarSign,

      items: [
        {
          title: "Set Budget",

          url: "/dashboard/budget/set_budget",
        },

        {
          title: "Track Budget",

          url: "/dashboard/budget/track_budget",
        },
      ],
    },

    {
      title: "Goal",

      url: "/dashboard/goal",

      icon: DollarSign,

      items: [
        {
          title: "Set goal",

          url: "/dashboard/goal/set_goal",
        },

        {
          title: "View All",

          url: "/dashboard/goal",
        },
      ],
    },

    {
      title: "Trip Manager",

      url: "/dashboard/trip_manager",

      icon: Calendar,

      items: [
        {
          title: "Plan Trip",

          url: "/dashboard/trip_manager/plan_trip",
        },

        {
          title: "Manage",

          url: "/dashboard/trip_manager/manage",
        },
      ],
    },

    {
      title: "Accounts",

      url: "/dashboard/accounts",

      icon: BadgeCheck,

      items: [
        {
          title: "View",

          url: "/dashboard/accounts/view",
        },

        {
          title: "Manage",

          url: "/dashboard/accounts/manage",
        },
      ],
    },
  ],

  projects: [
    {
      name: "Profile",

      url: "/profile",

      icon: User,
    },

    {
      name: "Notifications",
      url: "/notifications",

      icon: Bell,
    },

    {
      name: "Languages",

      url: "/settings/languages",

      icon: Languages,
    },

    {
      name: "Settings",

      url: "/settings",

      icon: Settings,
    },

    {
      name: "Help & Support",

      url: "/help_support",

      icon: HelpCircle,
    },
  ],
};

export function MainSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader />

      <SidebarContent>
        <SidebarUpperContent items={data.navMain} />

        <SidebarLowerContent projects={data.projects} />
      </SidebarContent>

      <SidebarFooter>
        <SidebarUser user={data.user} />
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  );
}
