
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Users, 
  BookOpen, 
  GraduationCap, 
  DollarSign, 
  TrendingUp, 
  TrendingDown 
} from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string;
  description?: string;
  icon: React.ReactNode;
  trend?: "up" | "down" | "neutral";
  trendValue?: string;
}

export const StatsCard: React.FC<StatsCardProps> = ({ 
  title, 
  value, 
  description, 
  icon,
  trend,
  trendValue
}) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <div className="h-8 w-8 rounded-full bg-primary/10 p-1.5 text-primary">
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {(description || trend) && (
          <div className="flex items-center text-sm text-muted-foreground mt-1">
            {trend && (
              <>
                {trend === "up" ? (
                  <TrendingUp className="mr-1 h-3 w-3 text-green-500" />
                ) : trend === "down" ? (
                  <TrendingDown className="mr-1 h-3 w-3 text-red-500" />
                ) : null}
                {trendValue && <span className={`mr-1 ${trend === "up" ? "text-green-500" : trend === "down" ? "text-red-500" : ""}`}>{trendValue}</span>}
              </>
            )}
            {description && <span>{description}</span>}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export const DashboardStats: React.FC = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <StatsCard 
        title="Total Students" 
        value="1,234" 
        description="Active students" 
        icon={<Users />}
        trend="up"
        trendValue="+15%"
      />
      <StatsCard 
        title="Active Courses" 
        value="42" 
        description="Running this month" 
        icon={<BookOpen />}
      />
      <StatsCard 
        title="Teachers" 
        value="28" 
        description="Full-time & part-time" 
        icon={<GraduationCap />}
      />
      <StatsCard 
        title="Revenue" 
        value="$48,500" 
        description="This month" 
        icon={<DollarSign />}
        trend="up"
        trendValue="+5.2%"
      />
    </div>
  );
};
