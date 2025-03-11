
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
  { month: "Янв", revenue: 12500, expenses: 10000 },
  { month: "Фев", revenue: 15000, expenses: 11200 },
  { month: "Мар", revenue: 18500, expenses: 12500 },
  { month: "Апр", revenue: 17000, expenses: 12800 },
  { month: "Май", revenue: 20000, expenses: 13500 },
  { month: "Июн", revenue: 23500, expenses: 14200 },
];

const paymentData = [
  {
    id: "1",
    studentName: "Мария Родригез",
    amount: 750,
    date: "2023-06-15",
    method: "Кредитная карта",
    course: "Интенсивный курс английского",
    status: "paid",
  },
  {
    id: "2",
    studentName: "Джеймс Уилсон",
    amount: 500,
    date: "2023-06-10",
    method: "Банковский перевод",
    course: "Деловой испанский",
    status: "partially",
  },
  {
    id: "3",
    studentName: "Анна Джонсон",
    amount: 1200,
    date: "2023-06-05",
    method: "Кредитная карта",
    course: "Французский для начинающих",
    status: "paid",
  },
  {
    id: "4",
    studentName: "Дэвид Ли",
    amount: 850,
    date: "2023-05-30",
    method: "PayPal",
    course: "Немецкая разговорная речь",
    status: "overdue",
  },
  {
    id: "5",
    studentName: "Сара Мартинез",
    amount: 650,
    date: "2023-06-12",
    method: "Кредитная карта",
    course: "Итальянский язык и культура",
    status: "paid",
  },
];

const FinancePage = () => {
  return (
    <MainLayout>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Финансовый учет</h1>
          <p className="text-muted-foreground">
            Управление платежами, отправка напоминаний и отслеживание финансовых отчетов.
          </p>
        </div>
        
        <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Общий доход</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">48 500 ₽</div>
              <p className="text-xs text-muted-foreground">
                +15% с прошлого месяца
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Неоплаченные платежи</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3 250 ₽</div>
              <p className="text-xs text-muted-foreground">
                5 студентов с просроченными платежами
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">В этом месяце</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">23 500 ₽</div>
              <p className="text-xs text-muted-foreground">
                35 обработанных платежей
              </p>
            </CardContent>
          </Card>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Финансовый обзор</CardTitle>
            <CardDescription>Доходы vs. Расходы в текущем году</CardDescription>
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
                      new Intl.NumberFormat('ru-RU', {
                        style: 'currency',
                        currency: 'RUB',
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0,
                      }).format(value)
                    } 
                  />
                  <Tooltip 
                    formatter={(value) => 
                      new Intl.NumberFormat('ru-RU', {
                        style: 'currency',
                        currency: 'RUB',
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
                    name="Доходы"
                  />
                  <Line type="monotone" dataKey="expenses" stroke="#ef4444" strokeWidth={2} name="Расходы" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        
        <Tabs defaultValue="all-payments">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold mb-2">Управление платежами</h2>
            <TabsList>
              <TabsTrigger value="all-payments">Все платежи</TabsTrigger>
              <TabsTrigger value="pending">Ожидающие</TabsTrigger>
              <TabsTrigger value="overdue">Просроченные</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="all-payments" className="mt-2">
            <Card>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Студент</TableHead>
                      <TableHead>Курс</TableHead>
                      <TableHead>Дата</TableHead>
                      <TableHead>Сумма</TableHead>
                      <TableHead>Статус</TableHead>
                      <TableHead className="text-right">Действия</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {paymentData.map((payment) => (
                      <TableRow key={payment.id}>
                        <TableCell>{payment.studentName}</TableCell>
                        <TableCell>{payment.course}</TableCell>
                        <TableCell>{new Date(payment.date).toLocaleDateString()}</TableCell>
                        <TableCell>
                          {payment.amount.toLocaleString()} ₽
                        </TableCell>
                        <TableCell>
                          {payment.status === "paid" ? (
                            <Badge className="bg-green-500">Оплачено</Badge>
                          ) : payment.status === "partially" ? (
                            <Badge className="bg-amber-500">Частично</Badge>
                          ) : (
                            <Badge variant="destructive">Просрочено</Badge>
                          )}
                        </TableCell>
                        <TableCell className="text-right">
                          {payment.status !== "paid" && (
                            <Button size="sm" variant="outline" className="h-8">
                              <Send className="mr-2 h-3 w-3" />
                              Отправить напоминание
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
                <p className="text-muted-foreground">Ожидающие платежи будут отображены здесь.</p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="overdue" className="mt-2">
            <Card>
              <CardContent className="p-6">
                <p className="text-muted-foreground">Просроченные платежи будут отображены здесь.</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default FinancePage;
