
import React from "react";
import MainLayout from "@/components/Layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { BookOpen, MoreHorizontal } from "lucide-react";

const dummyCourses = [
  {
    id: "1",
    name: "Интенсивный курс английского",
    level: "Средний",
    teacher: "Эмма Уотсон",
    studentsCount: 12,
    startDate: "2023-09-01",
    endDate: "2023-12-15",
    status: "active",
  },
  {
    id: "2",
    name: "Деловой испанский",
    level: "Продвинутый",
    teacher: "Мигель Родригез",
    studentsCount: 8,
    startDate: "2023-08-15",
    endDate: "2023-11-30",
    status: "active",
  },
  {
    id: "3",
    name: "Французский для начинающих",
    level: "Начинающий",
    teacher: "Софи Мартин",
    studentsCount: 15,
    startDate: "2023-10-01",
    endDate: "2024-01-15",
    status: "upcoming",
  },
  {
    id: "4",
    name: "Немецкая разговорная речь",
    level: "Выше среднего",
    teacher: "Ханс Шмидт",
    studentsCount: 6,
    startDate: "2023-07-15",
    endDate: "2023-10-30",
    status: "completed",
  },
  {
    id: "5",
    name: "Итальянский язык и культура",
    level: "Элементарный",
    teacher: "Лючия Бьянки",
    studentsCount: 10,
    startDate: "2023-09-15",
    endDate: "2023-12-20",
    status: "active",
  },
];

const CourseList = () => {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Курс</TableHead>
            <TableHead>Уровень</TableHead>
            <TableHead>Преподаватель</TableHead>
            <TableHead>Студенты</TableHead>
            <TableHead>Статус</TableHead>
            <TableHead className="text-right">Действия</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {dummyCourses.map((course) => (
            <TableRow key={course.id}>
              <TableCell>
                <div className="font-medium">{course.name}</div>
                <div className="text-sm text-muted-foreground">
                  {new Date(course.startDate).toLocaleDateString()} - {new Date(course.endDate).toLocaleDateString()}
                </div>
              </TableCell>
              <TableCell>{course.level}</TableCell>
              <TableCell>{course.teacher}</TableCell>
              <TableCell>{course.studentsCount}</TableCell>
              <TableCell>
                {course.status === "active" ? (
                  <Badge className="bg-green-500">Активный</Badge>
                ) : course.status === "upcoming" ? (
                  <Badge variant="outline" className="text-blue-500 border-blue-500">Предстоящий</Badge>
                ) : (
                  <Badge variant="secondary">Завершенный</Badge>
                )}
              </TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreHorizontal className="h-4 w-4" />
                      <span className="sr-only">Открыть меню</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Действия</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Просмотр деталей</DropdownMenuItem>
                    <DropdownMenuItem>Редактировать курс</DropdownMenuItem>
                    <DropdownMenuItem>Управление студентами</DropdownMenuItem>
                    <DropdownMenuItem>Просмотр расписания</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-destructive">
                      Отменить курс
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

const CoursesPage = () => {
  return (
    <MainLayout>
      <div className="flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Курсы</h1>
            <p className="text-muted-foreground">
              Управление курсами, уроками, и назначение преподавателей и студентов.
            </p>
          </div>
          <Button>
            <BookOpen className="mr-2 h-4 w-4" />
            Создать курс
          </Button>
        </div>
        
        <Tabs defaultValue="all-courses">
          <TabsList>
            <TabsTrigger value="all-courses">Все курсы</TabsTrigger>
            <TabsTrigger value="active">Активные</TabsTrigger>
            <TabsTrigger value="upcoming">Предстоящие</TabsTrigger>
            <TabsTrigger value="completed">Завершенные</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all-courses" className="mt-6">
            <CourseList />
          </TabsContent>
          
          <TabsContent value="active" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <p className="text-muted-foreground">Активные курсы будут отображены здесь.</p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="upcoming" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <p className="text-muted-foreground">Предстоящие курсы будут отображены здесь.</p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="completed" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <p className="text-muted-foreground">Завершенные курсы будут отображены здесь.</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default CoursesPage;
