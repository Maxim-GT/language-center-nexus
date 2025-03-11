
import React from "react";
import MainLayout from "@/components/Layout/MainLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Area,
  AreaChart,
} from "recharts";

const studentPerformanceData = [
  { name: "Beginner (A1)", average: 85, highest: 95, lowest: 70 },
  { name: "Elementary (A2)", average: 82, highest: 94, lowest: 68 },
  { name: "Intermediate (B1)", average: 78, highest: 92, lowest: 65 },
  { name: "Upper Int. (B2)", average: 76, highest: 90, lowest: 62 },
  { name: "Advanced (C1)", average: 80, highest: 95, lowest: 70 },
  { name: "Proficient (C2)", average: 88, highest: 98, lowest: 75 },
];

const trafficData = [
  { month: "Jan", newStudents: 15, inquiries: 45, conversions: 10 },
  { month: "Feb", newStudents: 20, inquiries: 60, conversions: 15 },
  { month: "Mar", newStudents: 25, inquiries: 75, conversions: 18 },
  { month: "Apr", newStudents: 22, inquiries: 65, conversions: 16 },
  { month: "May", newStudents: 30, inquiries: 85, conversions: 22 },
  { month: "Jun", newStudents: 35, inquiries: 95, conversions: 28 },
];

const revenueData = [
  { month: "Jan", revenue: 12500, expenses: 10000, profit: 2500 },
  { month: "Feb", revenue: 15000, expenses: 11200, profit: 3800 },
  { month: "Mar", revenue: 18500, expenses: 12500, profit: 6000 },
  { month: "Apr", revenue: 17000, expenses: 12800, profit: 4200 },
  { month: "May", revenue: 20000, expenses: 13500, profit: 6500 },
  { month: "Jun", revenue: 23500, expenses: 14200, profit: 9300 },
];

const courseDistributionData = [
  { name: "English", value: 45, color: "#3b82f6" },
  { name: "Spanish", value: 20, color: "#ef4444" },
  { name: "French", value: 15, color: "#22c55e" },
  { name: "German", value: 10, color: "#f59e0b" },
  { name: "Italian", value: 5, color: "#8b5cf6" },
  { name: "Others", value: 5, color: "#6b7280" },
];

const AnalyticsPage = () => {
  return (
    <MainLayout>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Analytics & Reports</h1>
          <p className="text-muted-foreground">
            View student performance, financial metrics, and other key statistics.
          </p>
        </div>
        
        <Tabs defaultValue="performance">
          <TabsList>
            <TabsTrigger value="performance">Student Performance</TabsTrigger>
            <TabsTrigger value="traffic">Traffic & Conversion</TabsTrigger>
            <TabsTrigger value="financial">Financial Reports</TabsTrigger>
          </TabsList>
          
          <TabsContent value="performance" className="mt-6">
            <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Student Performance by Level</CardTitle>
                  <CardDescription>Average, highest, and lowest scores</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={studentPerformanceData}
                        margin={{
                          top: 20,
                          right: 30,
                          left: 20,
                          bottom: 40,
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" angle={-45} textAnchor="end" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="average" name="Average Score" fill="#3b82f6" />
                        <Bar dataKey="highest" name="Highest Score" fill="#22c55e" />
                        <Bar dataKey="lowest" name="Lowest Score" fill="#ef4444" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Course Distribution</CardTitle>
                  <CardDescription>Students enrolled by language</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={courseDistributionData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        >
                          {courseDistributionData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Legend />
                        <Tooltip formatter={(value) => `${value} students`} />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="traffic" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Student Acquisition</CardTitle>
                <CardDescription>New students, inquiries, and conversion rate</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-96">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                      data={trafficData}
                      margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 20,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Area
                        type="monotone"
                        dataKey="inquiries"
                        stackId="1"
                        stroke="#8884d8"
                        fill="#8884d8"
                        name="Inquiries"
                      />
                      <Area
                        type="monotone"
                        dataKey="newStudents"
                        stackId="2"
                        stroke="#82ca9d"
                        fill="#82ca9d"
                        name="New Students"
                      />
                      <Area
                        type="monotone"
                        dataKey="conversions"
                        stackId="3"
                        stroke="#ffc658"
                        fill="#ffc658"
                        name="Conversions"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="financial" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Financial Performance</CardTitle>
                <CardDescription>Revenue, expenses, and profit over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-96">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={revenueData}
                      margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 20,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis 
                        tickFormatter={(value) => 
                          new Intl.NumberFormat('en-US', {
                            style: 'currency',
                            currency: 'USD',
                            minimumFractionDigits: 0,
                            maximumFractionDigits: 0,
                          }).format(value)
                        } 
                      />
                      <Tooltip 
                        formatter={(value) => 
                          new Intl.NumberFormat('en-US', {
                            style: 'currency',
                            currency: 'USD',
                          }).format(Number(value))
                        } 
                      />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="revenue"
                        stroke="#3b82f6"
                        activeDot={{ r: 8 }}
                        name="Revenue"
                        strokeWidth={2}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="expenses" 
                        stroke="#ef4444" 
                        name="Expenses"
                        strokeWidth={2}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="profit" 
                        stroke="#22c55e" 
                        name="Profit"
                        strokeWidth={2}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default AnalyticsPage;
