
import React from "react";
import MainLayout from "@/components/Layout/MainLayout";
import { Button } from "@/components/ui/button";
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
import { MoreHorizontal, UserPlus } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const dummyTeachers = [
  {
    id: "1",
    name: "Эмма Уотсон",
    email: "emma.w@example.com",
    phone: "+1 (555) 123-4567",
    subjects: ["Английский", "Литература"],
    coursesCount: 3,
    status: "active",
  },
  {
    id: "2",
    name: "Мигель Родригез",
    email: "miguel.r@example.com",
    phone: "+1 (555) 234-5678",
    subjects: ["Испанский", "Деловой испанский"],
    coursesCount: 2,
    status: "active",
  },
  {
    id: "3",
    name: "Софи Мартин",
    email: "sophie.m@example.com",
    phone: "+1 (555) 345-6789",
    subjects: ["Французский", "Французская литература"],
    coursesCount: 1,
    status: "away",
  },
  {
    id: "4",
    name: "Ханс Шмидт",
    email: "hans.s@example.com",
    phone: "+1 (555) 456-7890",
    subjects: ["Немецкий", "Немецкая разговорная речь"],
    coursesCount: 1,
    status: "active",
  },
  {
    id: "5",
    name: "Лючия Бьянки",
    email: "lucia.b@example.com",
    phone: "+1 (555) 567-8901",
    subjects: ["Итальянский", "Итальянская культура"],
    coursesCount: 1,
    status: "active",
  },
];

const TeachersPage = () => {
  return (
    <MainLayout>
      <div className="flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Преподаватели</h1>
            <p className="text-muted-foreground">
              Управление преподавателями, их информацией и назначением на курсы.
            </p>
          </div>
          <Button>
            <UserPlus className="mr-2 h-4 w-4" />
            Добавить преподавателя
          </Button>
        </div>
        
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Имя</TableHead>
                <TableHead>Предметы</TableHead>
                <TableHead>Курсы</TableHead>
                <TableHead>Статус</TableHead>
                <TableHead className="text-right">Действия</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {dummyTeachers.map((teacher) => (
                <TableRow key={teacher.id}>
                  <TableCell>
                    <div className="font-medium">{teacher.name}</div>
                    <div className="text-sm text-muted-foreground">{teacher.email}</div>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-1">
                      {teacher.subjects.map((subject, index) => (
                        <Badge key={index} variant="outline" className="bg-primary/10 text-primary">
                          {subject}
                        </Badge>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell>{teacher.coursesCount} курс(ов)</TableCell>
                  <TableCell>
                    {teacher.status === "active" ? (
                      <Badge className="bg-green-500">Активный</Badge>
                    ) : (
                      <Badge variant="outline" className="text-amber-500 border-amber-500">Отсутствует</Badge>
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
                        <DropdownMenuItem>Просмотр профиля</DropdownMenuItem>
                        <DropdownMenuItem>Редактировать данные</DropdownMenuItem>
                        <DropdownMenuItem>Просмотр расписания</DropdownMenuItem>
                        <DropdownMenuItem>Просмотр курсов</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-destructive">
                          Удалить преподавателя
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </MainLayout>
  );
};

export default TeachersPage;
