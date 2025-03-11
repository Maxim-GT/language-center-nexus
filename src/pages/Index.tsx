
import React from "react";
import MainLayout from "@/components/Layout/MainLayout";
import { DashboardStats } from "@/components/Dashboard/DashboardStats";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { StudentList } from "@/components/Students/StudentList";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  PieChart, 
  Pie, 
  Cell, 
  Legend 
} from "recharts";

const revenueData = [
  { month: "Янв", revenue: 12500 },
  { month: "Фев", revenue: 15000 },
  { month: "Мар", revenue: 18500 },
  { month: "Апр", revenue: 17000 },
  { month: "Май", revenue: 20000 },
  { month: "Июн", revenue: 23500 },
];

const studentsByLevelData = [
  { name: "Начинающий", value: 35, color: "#3b82f6" },
  { name: "Элементарный", value: 25, color: "#60a5fa" },
  { name: "Средний", value: 20, color: "#93c5fd" },
  { name: "Выше сред.", value: 15, color: "#bfdbfe" },
  { name: "Продвинутый", value: 5, color: "#dbeafe" },
];

const Index = () => {
  return (
    <MainLayout>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Панель управления</h1>
          <p className="text-muted-foreground">
            Добро пожаловать в панель управления LinguaCRM.
          </p>
        </div>
        
        <DashboardStats />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Обзор доходов</CardTitle>
              <CardDescription>Ежемесячный доход за текущий год</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={revenueData}
                    margin={{
                      top: 20,
                      right: 20,
                      left: 20,
                      bottom: 20,
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
                    <Bar dataKey="revenue" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Студенты по уровням</CardTitle>
              <CardDescription>Распределение студентов по уровням языка</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={studentsByLevelData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {studentsByLevelData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Legend />
                    <Tooltip formatter={(value) => `${value} студентов`} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div>
          <Tabs defaultValue="recent">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold mb-2">Студенты</h2>
              <TabsList>
                <TabsTrigger value="recent">Последние</TabsTrigger>
                <TabsTrigger value="overdue">Просроченные платежи</TabsTrigger>
                <TabsTrigger value="upcoming">Предстоящие уроки</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="recent" className="mt-2">
              <StudentList />
            </TabsContent>
            <TabsContent value="overdue" className="mt-2">
              <Card>
                <CardContent className="p-6">
                  <p className="text-muted-foreground">
                    Студенты с просроченными платежами будут отображены здесь.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="upcoming" className="mt-2">
              <Card>
                <CardContent className="p-6">
                  <p className="text-muted-foreground">
                    Студенты с предстоящими уроками будут отображены здесь.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </MainLayout>
  );
};

export default Index;
