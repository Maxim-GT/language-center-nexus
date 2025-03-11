
import React from "react";
import MainLayout from "@/components/Layout/MainLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DollarSign, Send } from "lucide-react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const revenueData = [
  { month: "Jan", revenue: 12500, expenses: 10000 },
  { month: "Feb", revenue: 15000, expenses: 11200 },
  { month: "Mar", revenue: 18500, expenses: 12500 },
  { month: "Apr", revenue: 17000, expenses: 12800 },
  { month: "May", revenue: 20000, expenses: 13500 },
  { month: "Jun", revenue: 23500, expenses: 14200 },
];

const paymentData = [
  {
    id: "1",
    studentName: "Maria Rodriguez",
    amount: 750,
    date: "2023-06-15",
    method: "Credit Card",
    course: "Intensive English Course",
    status: "paid",
  },
  {
    id: "2",
    studentName: "James Wilson",
    amount: 500,
    date: "2023-06-10",
    method: "Bank Transfer",
    course: "Business Spanish",
    status: "partially",
  },
  {
    id: "3",
    studentName: "Anna Johnson",
    amount: 1200,
    date: "2023-06-05",
    method: "Credit Card",
    course: "French for Beginners",
    status: "paid",
  },
  {
    id: "4",
    studentName: "David Lee",
    amount: 850,
    date: "2023-05-30",
    method: "PayPal",
    course: "German Conversation",
    status: "overdue",
  },
  {
    id: "5",
    studentName: "Sarah Martinez",
    amount: 650,
    date: "2023-06-12",
    method: "Credit Card",
    course: "Italian Culture & Language",
    status: "paid",
  },
];

const FinancePage = () => {
  return (
    <MainLayout>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Financial Accounting</h1>
          <p className="text-muted-foreground">
            Manage payments, send reminders, and track financial reports.
          </p>
        </div>
        
        <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$48,500</div>
              <p className="text-xs text-muted-foreground">
                +15% from last month
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Outstanding Payments</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$3,250</div>
              <p className="text-xs text-muted-foreground">
                5 students with overdue payments
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">This Month</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$23,500</div>
              <p className="text-xs text-muted-foreground">
                35 payments processed
              </p>
            </CardContent>
          </Card>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Financial Overview</CardTitle>
            <CardDescription>Revenue vs. Expenses in the current year</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={revenueData}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 10,
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
                    strokeWidth={2}
                    activeDot={{ r: 8 }}
                  />
                  <Line type="monotone" dataKey="expenses" stroke="#ef4444" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        
        <Tabs defaultValue="all-payments">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold mb-2">Payment Management</h2>
            <TabsList>
              <TabsTrigger value="all-payments">All Payments</TabsTrigger>
              <TabsTrigger value="pending">Pending</TabsTrigger>
              <TabsTrigger value="overdue">Overdue</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="all-payments" className="mt-2">
            <Card>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Student</TableHead>
                      <TableHead>Course</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {paymentData.map((payment) => (
                      <TableRow key={payment.id}>
                        <TableCell>{payment.studentName}</TableCell>
                        <TableCell>{payment.course}</TableCell>
                        <TableCell>{new Date(payment.date).toLocaleDateString()}</TableCell>
                        <TableCell>
                          ${payment.amount.toLocaleString()}
                        </TableCell>
                        <TableCell>
                          {payment.status === "paid" ? (
                            <Badge className="bg-green-500">Paid</Badge>
                          ) : payment.status === "partially" ? (
                            <Badge className="bg-amber-500">Partial</Badge>
                          ) : (
                            <Badge variant="destructive">Overdue</Badge>
                          )}
                        </TableCell>
                        <TableCell className="text-right">
                          {payment.status !== "paid" && (
                            <Button size="sm" variant="outline" className="h-8">
                              <Send className="mr-2 h-3 w-3" />
                              Send Reminder
                            </Button>
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="pending" className="mt-2">
            <Card>
              <CardContent className="p-6">
                <p className="text-muted-foreground">Pending payments will be displayed here.</p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="overdue" className="mt-2">
            <Card>
              <CardContent className="p-6">
                <p className="text-muted-foreground">Overdue payments will be displayed here.</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default FinancePage;
