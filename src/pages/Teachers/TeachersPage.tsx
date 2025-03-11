
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
    name: "Emma Watson",
    email: "emma.w@example.com",
    phone: "+1 (555) 123-4567",
    subjects: ["English", "Literature"],
    coursesCount: 3,
    status: "active",
  },
  {
    id: "2",
    name: "Miguel Rodriguez",
    email: "miguel.r@example.com",
    phone: "+1 (555) 234-5678",
    subjects: ["Spanish", "Business Spanish"],
    coursesCount: 2,
    status: "active",
  },
  {
    id: "3",
    name: "Sophie Martin",
    email: "sophie.m@example.com",
    phone: "+1 (555) 345-6789",
    subjects: ["French", "French Literature"],
    coursesCount: 1,
    status: "away",
  },
  {
    id: "4",
    name: "Hans Schmidt",
    email: "hans.s@example.com",
    phone: "+1 (555) 456-7890",
    subjects: ["German", "German Conversation"],
    coursesCount: 1,
    status: "active",
  },
  {
    id: "5",
    name: "Lucia Bianchi",
    email: "lucia.b@example.com",
    phone: "+1 (555) 567-8901",
    subjects: ["Italian", "Italian Culture"],
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
            <h1 className="text-3xl font-bold tracking-tight">Teachers</h1>
            <p className="text-muted-foreground">
              Manage teachers, their information, and course assignments.
            </p>
          </div>
          <Button>
            <UserPlus className="mr-2 h-4 w-4" />
            Add Teacher
          </Button>
        </div>
        
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Subjects</TableHead>
                <TableHead>Courses</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
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
                  <TableCell>{teacher.coursesCount} course(s)</TableCell>
                  <TableCell>
                    {teacher.status === "active" ? (
                      <Badge className="bg-green-500">Active</Badge>
                    ) : (
                      <Badge variant="outline" className="text-amber-500 border-amber-500">Away</Badge>
                    )}
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Open menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>View Profile</DropdownMenuItem>
                        <DropdownMenuItem>Edit Details</DropdownMenuItem>
                        <DropdownMenuItem>View Schedule</DropdownMenuItem>
                        <DropdownMenuItem>View Courses</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-destructive">
                          Remove Teacher
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
