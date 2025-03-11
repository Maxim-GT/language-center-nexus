
import React, { useState } from "react";
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
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { MoreHorizontal, Search } from "lucide-react";

interface Student {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  level: string;
  status: "active" | "paused" | "completed";
  lastInteraction: string;
  paymentStatus: "paid" | "overdue" | "partially";
}

const dummyStudents: Student[] = [
  {
    id: "1",
    fullName: "Maria Rodriguez",
    email: "maria.r@example.com",
    phone: "+1 (555) 123-4567",
    level: "intermediate",
    status: "active",
    lastInteraction: "2023-06-10",
    paymentStatus: "paid",
  },
  {
    id: "2",
    fullName: "James Wilson",
    email: "james.w@example.com",
    phone: "+1 (555) 234-5678",
    level: "beginner",
    status: "active",
    lastInteraction: "2023-06-15",
    paymentStatus: "partially",
  },
  {
    id: "3",
    fullName: "Anna Johnson",
    email: "anna.j@example.com",
    phone: "+1 (555) 345-6789",
    level: "advanced",
    status: "completed",
    lastInteraction: "2023-05-20",
    paymentStatus: "paid",
  },
  {
    id: "4",
    fullName: "David Lee",
    email: "david.l@example.com",
    phone: "+1 (555) 456-7890",
    level: "upperIntermediate",
    status: "paused",
    lastInteraction: "2023-04-30",
    paymentStatus: "overdue",
  },
  {
    id: "5",
    fullName: "Sarah Martinez",
    email: "sarah.m@example.com",
    phone: "+1 (555) 567-8901",
    level: "elementary",
    status: "active",
    lastInteraction: "2023-06-18",
    paymentStatus: "paid",
  }
];

export const StudentList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredStudents = dummyStudents.filter(student => 
    student.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.email.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const getStatusBadge = (status: Student["status"]) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-500">Active</Badge>;
      case "paused":
        return <Badge variant="outline" className="text-amber-500 border-amber-500">Paused</Badge>;
      case "completed":
        return <Badge variant="secondary">Completed</Badge>;
      default:
        return null;
    }
  };
  
  const getPaymentStatusBadge = (status: Student["paymentStatus"]) => {
    switch (status) {
      case "paid":
        return <Badge className="bg-green-500">Paid</Badge>;
      case "partially":
        return <Badge className="bg-amber-500">Partial</Badge>;
      case "overdue":
        return <Badge variant="destructive">Overdue</Badge>;
      default:
        return null;
    }
  };
  
  const getLevelText = (level: string) => {
    switch (level) {
      case "beginner":
        return "Beginner (A1)";
      case "elementary":
        return "Elementary (A2)";
      case "intermediate":
        return "Intermediate (B1)";
      case "upperIntermediate":
        return "Upper Intermediate (B2)";
      case "advanced":
        return "Advanced (C1)";
      case "proficient":
        return "Proficient (C2)";
      default:
        return level;
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search students..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Button>Add Student</Button>
      </div>
      
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Level</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Payment</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredStudents.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} className="text-center text-muted-foreground py-6">
                  No students found
                </TableCell>
              </TableRow>
            ) : (
              filteredStudents.map((student) => (
                <TableRow key={student.id}>
                  <TableCell>
                    <div>
                      <div className="font-medium">{student.fullName}</div>
                      <div className="text-sm text-muted-foreground">{student.email}</div>
                    </div>
                  </TableCell>
                  <TableCell>{getLevelText(student.level)}</TableCell>
                  <TableCell>{getStatusBadge(student.status)}</TableCell>
                  <TableCell>{getPaymentStatusBadge(student.paymentStatus)}</TableCell>
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
                        <DropdownMenuItem>View Payments</DropdownMenuItem>
                        <DropdownMenuItem>Course History</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-destructive">
                          Delete Student
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
