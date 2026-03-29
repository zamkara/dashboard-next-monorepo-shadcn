import {
  ChartIsland,
  DataTableIsland,
  HeaderIsland,
  SidebarIsland,
} from "@/components/dashboard-islands"
import { SectionCards } from "@/components/section-cards"
import { SidebarInset, SidebarProvider } from "@workspace/ui/components/sidebar"

import data from "./data.json"

export default function Page() {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <SidebarIsland />
      <SidebarInset>
        <HeaderIsland />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <SectionCards />
              <div className="px-4 lg:px-6">
                <ChartIsland />
              </div>
              <DataTableIsland data={data} />
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
