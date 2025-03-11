
import React, { createContext, useContext, useState, ReactNode } from "react";

export interface Student {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  level: string;
  dateOfBirth: Date;
  status: "active" | "paused" | "completed";
  lastInteraction: string;
  paymentStatus: "paid" | "overdue" | "partially";
}

interface StudentContextProps {
  students: Student[];
  addStudent: (student: Omit<Student, "id" | "lastInteraction" | "paymentStatus">) => void;
}

const StudentContext = createContext<StudentContextProps | undefined>(undefined);

// Начальные данные студентов
const initialStudents: Student[] = [
  {
    id: "1",
    fullName: "Мария Родригез",
    email: "maria.r@example.com",
    phone: "+1 (555) 123-4567",
    level: "intermediate",
    dateOfBirth: new Date("1990-05-15"),
    status: "active",
    lastInteraction: "2023-06-10",
    paymentStatus: "paid",
  },
  {
    id: "2",
    fullName: "Джеймс Уилсон",
    email: "james.w@example.com",
    phone: "+1 (555) 234-5678",
    level: "beginner",
    dateOfBirth: new Date("1992-03-20"),
    status: "active",
    lastInteraction: "2023-06-15",
    paymentStatus: "partially",
  },
  {
    id: "3",
    fullName: "Анна Джонсон",
    email: "anna.j@example.com",
    phone: "+1 (555) 345-6789",
    level: "advanced",
    dateOfBirth: new Date("1985-11-07"),
    status: "completed",
    lastInteraction: "2023-05-20",
    paymentStatus: "paid",
  },
  {
    id: "4",
    fullName: "Дэвид Ли",
    email: "david.l@example.com",
    phone: "+1 (555) 456-7890",
    level: "upperIntermediate",
    dateOfBirth: new Date("1988-09-12"),
    status: "paused",
    lastInteraction: "2023-04-30",
    paymentStatus: "overdue",
  },
  {
    id: "5",
    fullName: "Сара Мартинез",
    email: "sarah.m@example.com",
    phone: "+1 (555) 567-8901",
    level: "elementary",
    dateOfBirth: new Date("1995-01-25"),
    status: "active",
    lastInteraction: "2023-06-18",
    paymentStatus: "paid",
  }
];

export const StudentProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [students, setStudents] = useState<Student[]>(initialStudents);

  const addStudent = (newStudent: Omit<Student, "id" | "lastInteraction" | "paymentStatus">) => {
    const currentDate = new Date().toISOString().split("T")[0];
    const student: Student = {
      ...newStudent,
      id: `${students.length + 1}`,
      lastInteraction: currentDate,
      paymentStatus: "paid", // По умолчанию ставим "оплачено"
    };

    setStudents((prevStudents) => [...prevStudents, student]);
  };

  return (
    <StudentContext.Provider value={{ students, addStudent }}>
      {children}
    </StudentContext.Provider>
  );
};

export const useStudents = () => {
  const context = useContext(StudentContext);
  if (context === undefined) {
    throw new Error("useStudents must be used within a StudentProvider");
  }
  return context;
};
