"use client"

import dynamic from "next/dynamic"

type DashboardDataItem = {
  id: number
  header: string
  type: string
  status: string
  target: string
  limit: string
  reviewer: string
}

const SidebarIslandComponent = dynamic(
  () => import("@/components/app-sidebar").then((mod) => mod.AppSidebar),
  {
    ssr: false,
    loading: () => <div className="hidden md:block md:w-[var(--sidebar-width)]" />,
  }
)

const HeaderIslandComponent = dynamic(
  () => import("@/components/site-header").then((mod) => mod.SiteHeader),
  {
    ssr: false,
    loading: () => <div className="h-(--header-height) shrink-0 border-b" />,
  }
)

const ChartIslandComponent = dynamic(
  () =>
    import("@/components/chart-area-interactive").then(
      (mod) => mod.ChartAreaInteractive
    ),
  {
    ssr: false,
    loading: () => <div className="h-[250px] rounded-xl border bg-card" />,
  }
)

const DataTableIslandComponent = dynamic(
  () => import("@/components/data-table").then((mod) => mod.DataTable),
  {
    ssr: false,
    loading: () => <div className="min-h-[640px] rounded-xl border bg-card" />,
  }
)

export function SidebarIsland() {
  return <SidebarIslandComponent variant="inset" />
}

export function HeaderIsland() {
  return <HeaderIslandComponent />
}

export function ChartIsland() {
  return <ChartIslandComponent />
}

export function DataTableIsland({ data }: { data: DashboardDataItem[] }) {
  return <DataTableIslandComponent data={data} />
}
