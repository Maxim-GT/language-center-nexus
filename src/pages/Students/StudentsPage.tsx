
import React, { useState } from "react";
import MainLayout from "@/components/Layout/MainLayout";
import { StudentList } from "@/components/Students/StudentList";
import { StudentForm } from "@/components/Students/StudentForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

const StudentsPage = () => {
  const [activeTab, setActiveTab] = useState("all-students");

  const handleAddStudent = () => {
    setActiveTab("add-student");
    toast("Переход к форме добавления студента", {
      description: "Заполните все поля формы для регистрации нового студента."
    });
  };

  return (
    <MainLayout>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Студенты</h1>
          <p className="text-muted-foreground">
            Управление записями студентов, отслеживание прогресса и обработка платежей.
          </p>
        </div>
        
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="all-students">Все студенты</TabsTrigger>
            <TabsTrigger value="add-student">Добавить студента</TabsTrigger>
            <TabsTrigger value="student-interactions">История взаимодействий</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all-students" className="mt-6">
            <StudentList onAddStudent={handleAddStudent} />
          </TabsContent>
          
          <TabsContent value="add-student" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Регистрация нового студента</CardTitle>
                <CardDescription>
                  Добавьте нового студента в базу данных с личной информацией и предпочтениями по курсам.
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
                <CardTitle>История взаимодействий со студентами</CardTitle>
                <CardDescription>
                  Просмотр записей всех взаимодействий со студентами, включая звонки, встречи и сообщения.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">История взаимодействий будет отображена здесь.</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default StudentsPage;
