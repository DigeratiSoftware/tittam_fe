"use client"

import type React from "react"
import { useState } from "react"
import { useAuth } from "@/hooks/use-auth"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  LayoutDashboard,
  LogOut,
  Menu,
  Database,
  FileText,
  Users,
  Briefcase,
  BarChart3,
  ChevronDown,
  Bell,
  FolderOpen,
} from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import Image from "next/image"

interface DashboardLayoutProps {
  children: React.ReactNode
}

const sidebarItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
    roles: ["super_admin", "admin", "user"],
  },
  {
    title: "Schemes",
    href: "/dashboard/schemes",
    icon: Database,
    roles: ["super_admin"],
  },
  {
    title: "Components",
    href: "/dashboard/components",
    icon: Database,
    roles: ["super_admin"],
  },
  {
    title: "Templates",
    href: "/dashboard/templates",
    icon: FileText,
    roles: ["super_admin"],
  },
  {
    title: "Masters",
    href: "/dashboard/masters",
    icon: Database,
    roles: ["super_admin"],
  },
  {
    title: "Users",
    href: "/dashboard/users",
    icon: Users,
    roles: ["super_admin"],
  },
  {
    title: "Work Management",
    href: "/dashboard/work",
    icon: Briefcase,
    roles: ["admin"],
  },
  {
    title: "Reports",
    icon: BarChart3,
    roles: ["super_admin", "admin"],
    subItems: [
      {
        title: "Dashboard Reports",
        href: "/dashboard/reports/dashboard",
      },
      {
        title: "Scheme Reports",
        href: "/dashboard/reports/scheme",
      },
      {
        title: "Meeting Reports",
        href: "/dashboard/reports/meeting",
      },
    ],
  },
  {
    title: "Meeting Management",
    href: "/dashboard/meetings",
    icon: Users,
    roles: ["super_admin", "admin"],
  },
  {
    title: "Data Box",
    href: "/dashboard/drive",
    icon: FolderOpen,
    roles: ["super_admin", "admin", "manager", "user"],
  },
  {
    title: "Smart View",
    href: "/dashboard/smart-view",
    icon: BarChart3,
    roles: ["super_admin", "admin"],
  },
  {
    title: "Smart Sheets",
    icon: FileText,
    roles: ["super_admin", "admin"],
    subItems: [
      {
        title: "Create Sheet",
        href: "/dashboard/smart-sheets/create",
      },
      {
        title: "View Sheets",
        href: "/dashboard/smart-sheets/view",
      },
    ],
  },
  {
    title: "Info Hub",
    href: "/dashboard/info-hub",
    icon: Database,
    roles: ["super_admin", "admin"],
  },
  {
    title: "Contractors",
    href: "/dashboard/contractors",
    icon: Users,
    roles: ["admin"],
  },
  {
    title: "Notifications",
    href: "/dashboard/notifications",
    icon: Bell,
    roles: ["admin"],
  },
  {
    title: "Support Tickets",
    href: "/dashboard/support",
    icon: FileText,
    roles: ["super_admin", "admin", "user"],
  },
]

export { DashboardLayout }

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const { user, logout } = useAuth()
  const router = useRouter()
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isDesktopSidebarCollapsed, setIsDesktopSidebarCollapsed] = useState(false)
  const [expandedMenus, setExpandedMenus] = useState<string[]>([])

  const handleLogout = () => {
    logout()
    router.push("/")
  }

  const filteredItems = sidebarItems.filter((item) => item.roles.includes(user?.role || ""))

  const toggleMenu = (title: string) => {
    setExpandedMenus((prev) => (prev.includes(title) ? prev.filter((item) => item !== title) : [...prev, title]))
  }

  const renderMenuItem = (item: any, collapsed: boolean) => {
    const Icon = item.icon
    const isActive = item.href ? pathname === item.href : item.subItems?.some((sub: any) => pathname === sub.href)
    const isExpanded = expandedMenus.includes(item.title)

    if (item.subItems) {
      return (
        <div key={item.title}>
          <button
            onClick={() => !collapsed && toggleMenu(item.title)}
            className={cn(
              "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 hover:shadow-md",
              collapsed ? "justify-center" : "justify-between",
              isActive
                ? "bg-gradient-to-r from-[#F3B335] to-[#F3B335]/90 text-[#013A65] shadow-lg"
                : "text-white hover:text-white hover:bg-white/10 hover:shadow-sm border border-transparent hover:border-[#F3B335]/30",
            )}
            title={collapsed ? item.title : undefined}
          >
            <div className="flex items-center gap-3">
              <Icon className="h-4 w-4 flex-shrink-0" />
              {!collapsed && item.title}
            </div>
            {!collapsed && (
              <ChevronDown
                className={cn("h-4 w-4 transition-transform duration-200", isExpanded ? "transform rotate-180" : "")}
              />
            )}
          </button>
          {!collapsed && isExpanded && (
            <div className="ml-4 mt-1 space-y-1">
              {item.subItems.map((subItem: any) => {
                const isSubActive = pathname === subItem.href
                return (
                  <Link
                    key={subItem.href}
                    href={subItem.href}
                    className={cn(
                      "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                      isSubActive
                        ? "bg-gradient-to-r from-[#F3B335] to-[#F3B335]/90 text-[#013A65] shadow-md"
                        : "text-white/80 hover:text-white hover:bg-white/10 hover:shadow-sm",
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {subItem.title}
                  </Link>
                )
              })}
            </div>
          )}
        </div>
      )
    }

    return (
      <Link
        key={item.href}
        href={item.href!}
        className={cn(
          "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 hover:shadow-md",
          collapsed ? "justify-center" : "",
          isActive
            ? "bg-gradient-to-r from-[#F3B335] to-[#F3B335]/90 text-[#013A65] shadow-lg transform scale-[1.02]"
            : "text-white hover:text-white hover:bg-white/10 hover:shadow-sm border border-transparent hover:border-[#F3B335]/30",
        )}
        onClick={() => setIsMobileMenuOpen(false)}
        title={collapsed ? item.title : undefined}
      >
        <Icon className="h-4 w-4 flex-shrink-0" />
        {!collapsed && item.title}
      </Link>
    )
  }

  const SidebarContent = ({ collapsed = false }: { collapsed?: boolean }) => (
    <div
      className={cn(
        "flex flex-col h-full bg-gradient-to-b from-[#013A65] via-[#012A4D] to-[#013A65] border-r border-[#F3B335]/20 shadow-lg transition-all duration-300",
        collapsed ? "w-16" : "w-56",
      )}
    >
      <div className="flex-shrink-0 flex justify-center items-center py-3 border-b border-[#F3B335]/20">
        <div className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="TWP Logo"
            width={collapsed ? 32 : 40}
            height={collapsed ? 32 : 40}
            className="object-contain flex-shrink-0"
            priority
          />
          {!collapsed && <span className="text-white text-lg font-black tracking-wide">THITTAM</span>}
        </div>
      </div>

      <nav
        className="flex-1 p-3 space-y-1 bg-gradient-to-b from-[#012A4D] to-[#013A65] overflow-y-auto"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <style jsx>{`
          nav::-webkit-scrollbar {
            display: none;
          }
        `}</style>
        {filteredItems.map((item) => renderMenuItem(item, collapsed))}
      </nav>

      <div className="flex-shrink-0 p-3 border-t border-[#F3B335]/20 bg-gradient-to-r from-[#012A4D] to-[#013A65]">
        {!collapsed ? (
          <>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-7 h-7 bg-gradient-to-r from-[#F3B335] to-[#F3B335]/90 rounded-full flex items-center justify-center shadow-md">
                <span className="text-sm font-medium text-[#013A65]">{user?.name?.charAt(0) || "A"}</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate text-white">{user?.name}</p>
                <p className="text-xs text-white/70">{user?.role}</p>
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="w-full h-8 text-sm bg-white/10 text-white hover:bg-red-600 hover:text-white hover:border-red-500 border-white/20 transition-colors shadow-sm"
              onClick={handleLogout}
            >
              <LogOut className="h-4 w-4 mr-1.5" />
              Logout
            </Button>
          </>
        ) : (
          <div className="flex flex-col items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-r from-[#F3B335] to-[#F3B335]/90 rounded-full flex items-center justify-center shadow-md">
              <span className="text-sm font-medium text-[#013A65]">{user?.name?.charAt(0) || "A"}</span>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="w-8 h-8 p-0 bg-white/10 text-white hover:bg-red-600 hover:text-white hover:border-red-500 border-white/20 transition-colors shadow-sm"
              onClick={handleLogout}
              title="Logout"
            >
              <LogOut className="h-3 w-3" />
            </Button>
          </div>
        )}
      </div>
    </div>
  )

  return (
    <div className="flex h-full bg-gradient-to-br from-[#013A65] via-[#012A4D] to-[#013A65] overflow-hidden">
      <div className="hidden md:flex md:flex-col md:flex-shrink-0 relative">
        <Button
          variant="outline"
          size="sm"
          className="absolute top-4 -right-3 z-10 h-6 w-6 p-0 bg-white shadow-lg border-[#F3B335]/20 hover:bg-[#F3B335]/10"
          onClick={() => setIsDesktopSidebarCollapsed(!isDesktopSidebarCollapsed)}
        >
          <Menu className="h-3 w-3" />
        </Button>
        <SidebarContent collapsed={isDesktopSidebarCollapsed} />
      </div>

      <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            className="md:hidden fixed top-4 left-4 z-50 h-8 w-8 bg-white/95 backdrop-blur-sm shadow-lg border-[#F3B335]/20"
          >
            <Menu className="h-3.5 w-3.5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0 w-56">
          <SidebarContent />
        </SheetContent>
      </Sheet>

      <div className="flex-1 overflow-auto bg-[#F8F8F8]">
        <div className="p-6">{children}</div>
      </div>
    </div>
  )
}
