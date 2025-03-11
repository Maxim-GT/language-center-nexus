
import React, { useState } from "react";
import MainLayout from "@/components/Layout/MainLayout";
import { StudentList } from "@/components/Students/StudentList";
import { StudentForm } from "@/components/Students/StudentForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const StudentsPage = () => {
  return (
    <MainLayout>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Students</h1>
          <p className="text-muted-foreground">
            Manage your student records, track progress, and handle payments.
          </p>
        </div>
        
        <Tabs defaultValue="all-students">
          <TabsList>
            <TabsTrigger value="all-students">All Students</TabsTrigger>
            <TabsTrigger value="add-student">Add New Student</TabsTrigger>
            <TabsTrigger value="student-interactions">Interaction History</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all-students" className="mt-6">
            <StudentList />
          </TabsContent>
          
          <TabsContent value="add-student" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Register New Student</CardTitle>
                <CardDescription>
                  Add a new student to the database with their personal information and course preferences.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <StudentForm />
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="student-interactions" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Student Interaction History</CardTitle>
                <CardDescription>
                  View a record of all student interactions, including calls, meetings, and messages.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Interaction history will be displayed here.</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default StudentsPage;
