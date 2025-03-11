
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
    name: "Intensive English Course",
    level: "Intermediate",
    teacher: "Emma Watson",
    studentsCount: 12,
    startDate: "2023-09-01",
    endDate: "2023-12-15",
    status: "active",
  },
  {
    id: "2",
    name: "Business Spanish",
    level: "Advanced",
    teacher: "Miguel Rodriguez",
    studentsCount: 8,
    startDate: "2023-08-15",
    endDate: "2023-11-30",
    status: "active",
  },
  {
    id: "3",
    name: "French for Beginners",
    level: "Beginner",
    teacher: "Sophie Martin",
    studentsCount: 15,
    startDate: "2023-10-01",
    endDate: "2024-01-15",
    status: "upcoming",
  },
  {
    id: "4",
    name: "German Conversation",
    level: "Upper Intermediate",
    teacher: "Hans Schmidt",
    studentsCount: 6,
    startDate: "2023-07-15",
    endDate: "2023-10-30",
    status: "completed",
  },
  {
    id: "5",
    name: "Italian Culture & Language",
    level: "Elementary",
    teacher: "Lucia Bianchi",
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
            <TableHead>Course</TableHead>
            <TableHead>Level</TableHead>
            <TableHead>Teacher</TableHead>
            <TableHead>Students</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
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
                  <Badge className="bg-green-500">Active</Badge>
                ) : course.status === "upcoming" ? (
                  <Badge variant="outline" className="text-blue-500 border-blue-500">Upcoming</Badge>
                ) : (
                  <Badge variant="secondary">Completed</Badge>
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
                    <DropdownMenuItem>View Details</DropdownMenuItem>
                    <DropdownMenuItem>Edit Course</DropdownMenuItem>
                    <DropdownMenuItem>Manage Students</DropdownMenuItem>
                    <DropdownMenuItem>View Schedule</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-destructive">
                      Cancel Course
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
            <h1 className="text-3xl font-bold tracking-tight">Courses</h1>
            <p className="text-muted-foreground">
              Manage courses, lessons, and assign teachers and students.
            </p>
          </div>
          <Button>
            <BookOpen className="mr-2 h-4 w-4" />
            Create Course
          </Button>
        </div>
        
        <Tabs defaultValue="all-courses">
          <TabsList>
            <TabsTrigger value="all-courses">All Courses</TabsTrigger>
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all-courses" className="mt-6">
            <CourseList />
          </TabsContent>
          
          <TabsContent value="active" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <p className="text-muted-foreground">Active courses will be displayed here.</p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="upcoming" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <p className="text-muted-foreground">Upcoming courses will be displayed here.</p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="completed" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <p className="text-muted-foreground">Completed courses will be displayed here.</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default CoursesPage;
