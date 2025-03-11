
import React from "react";
import { NavLink } from "react-router-dom";
import {
  Sidebar as SidebarComponent,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  SidebarFooter
} from "@/components/ui/sidebar";
import {
  Users,
  BookOpen,
  GraduationCap,
  DollarSign,
  MessageCircle,
  BarChart3,
  LogOut,
  Menu
} from "lucide-react";
import { cn } from "@/lib/utils";

const SidebarMenuLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      cn(
        "w-full flex items-center gap-2 px-3 py-2 rounded-md text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors",
        isActive && "bg-sidebar-accent text-sidebar-accent-foreground"
      )
    }
  >
    {children}
  </NavLink>
);

export const Sidebar = () => {
  return (
    <SidebarComponent className="border-r border-border">
      <SidebarHeader className="h-14 flex items-center px-4 border-b border-sidebar-border">
        <div className="flex items-center gap-2 text-sidebar-foreground">
          <GraduationCap className="h-6 w-6" />
          <h1 className="text-xl font-bold">LinguaCRM</h1>
        </div>
        <div className="ml-auto md:hidden">
          <SidebarTrigger>
            <Menu className="h-5 w-5" />
          </SidebarTrigger>
        </div>
      </SidebarHeader>
      
      <SidebarContent className="py-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <SidebarMenuLink to="/">
                <BarChart3 className="h-5 w-5" />
                <span>Dashboard</span>
              </SidebarMenuLink>
            </SidebarMenuButton>
          </SidebarMenuItem>
          
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <SidebarMenuLink to="/students">
                <Users className="h-5 w-5" />
                <span>Students</span>
              </SidebarMenuLink>
            </SidebarMenuButton>
          </SidebarMenuItem>
          
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <SidebarMenuLink to="/courses">
                <BookOpen className="h-5 w-5" />
                <span>Courses</span>
              </SidebarMenuLink>
            </SidebarMenuButton>
          </SidebarMenuItem>
          
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <SidebarMenuLink to="/teachers">
                <GraduationCap className="h-5 w-5" />
                <span>Teachers</span>
              </SidebarMenuLink>
            </SidebarMenuButton>
          </SidebarMenuItem>
          
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <SidebarMenuLink to="/finance">
                <DollarSign className="h-5 w-5" />
                <span>Finance</span>
              </SidebarMenuLink>
            </SidebarMenuButton>
          </SidebarMenuItem>
          
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <SidebarMenuLink to="/communications">
                <MessageCircle className="h-5 w-5" />
                <span>Communications</span>
              </SidebarMenuLink>
            </SidebarMenuButton>
          </SidebarMenuItem>
          
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <SidebarMenuLink to="/analytics">
                <BarChart3 className="h-5 w-5" />
                <span>Analytics</span>
              </SidebarMenuLink>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
      
      <SidebarFooter className="p-4 border-t border-sidebar-border">
        <button className="w-full flex items-center gap-2 px-3 py-2 rounded-md text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors">
          <LogOut className="h-5 w-5" />
          <span>Logout</span>
        </button>
      </SidebarFooter>
    </SidebarComponent>
  );
};
