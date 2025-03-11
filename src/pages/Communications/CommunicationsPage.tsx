
import React from "react";
import MainLayout from "@/components/Layout/MainLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { BellRing, MessageCircle, Send } from "lucide-react";

const notifications = [
  {
    id: "1",
    title: "Напоминание об оплате",
    description: "Автоматическое напоминание об оплате для студентов с приближающимися сроками",
    recipients: 5,
    status: "scheduled",
    date: "2023-06-20",
  },
  {
    id: "2",
    title: "Напоминание о занятии",
    description: "Напоминание о завтрашнем занятии по продвинутому английскому",
    recipients: 12,
    status: "sent",
    date: "2023-06-15",
  },
  {
    id: "3",
    title: "Анонс нового курса",
    description: "Объявление о новом курсе делового испанского языка",
    recipients: 45,
    status: "sent",
    date: "2023-06-10",
  },
  {
    id: "4",
    title: "Расписание на праздники",
    description: "Информация о предстоящем праздничном расписании",
    recipients: 120,
    status: "draft",
    date: "2023-06-25",
  },
];

const messages = [
  {
    id: "1",
    student: "Мария Родригез",
    content: "Домашнее задание нужно сдать завтра или на следующей неделе?",
    date: "2023-06-15 14:30",
    status: "unread",
  },
  {
    id: "2",
    student: "Джеймс Уилсон",
    content: "Мне нужно перенести урок в четверг.",
    date: "2023-06-14 10:15",
    status: "read",
  },
  {
    id: "3",
    student: "Анна Джонсон",
    content: "Спасибо за дополнительные материалы.",
    date: "2023-06-13 16:45",
    status: "read",
  },
];

const CommunicationsPage = () => {
  return (
    <MainLayout>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Коммуникации</h1>
          <p className="text-muted-foreground">
            Управление уведомлениями, сообщениями и поддержание связи со студентами и преподавателями.
          </p>
        </div>
        
        <Tabs defaultValue="notifications">
          <TabsList>
            <TabsTrigger value="notifications">Уведомления</TabsTrigger>
            <TabsTrigger value="messages">Сообщения</TabsTrigger>
            <TabsTrigger value="compose">Написать</TabsTrigger>
          </TabsList>
          
          <TabsContent value="notifications" className="mt-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Уведомления и напоминания</CardTitle>
                  <CardDescription>
                    Управление автоматическими уведомлениями и напоминаниями для студентов и персонала.
                  </CardDescription>
                </div>
                <Button>
                  <BellRing className="mr-2 h-4 w-4" />
                  Новое уведомление
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {notifications.map((notification) => (
                    <div key={notification.id} className="flex items-start p-4 border rounded-lg">
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h3 className="font-medium">{notification.title}</h3>
                          {notification.status === "scheduled" ? (
                            <Badge variant="outline" className="text-blue-500 border-blue-500">Запланировано</Badge>
                          ) : notification.status === "sent" ? (
                            <Badge className="bg-green-500">Отправлено</Badge>
                          ) : (
                            <Badge variant="outline">Черновик</Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">{notification.description}</p>
                        <div className="flex text-xs text-muted-foreground mt-2">
                          <span>Получатели: {notification.recipients}</span>
                          <span className="mx-2">•</span>
                          <span>Дата: {notification.date}</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="ghost">Редактировать</Button>
                        {notification.status === "scheduled" && <Button size="sm" variant="ghost">Отменить</Button>}
                        {notification.status === "draft" && <Button size="sm" variant="outline">Отправить</Button>}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="messages" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Сообщения</CardTitle>
                <CardDescription>
                  Просмотр и ответы на сообщения студентов и преподавателей.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div 
                      key={message.id} 
                      className={`flex items-start p-4 border rounded-lg ${message.status === "unread" ? "bg-primary/5" : ""}`}
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h3 className="font-medium">{message.student}</h3>
                          {message.status === "unread" && (
                            <Badge className="bg-blue-500">Новое</Badge>
                          )}
                        </div>
                        <p className="text-sm mt-1">{message.content}</p>
                        <div className="text-xs text-muted-foreground mt-2">{message.date}</div>
                      </div>
                      <Button size="sm" variant="outline">
                        <MessageCircle className="mr-2 h-4 w-4" />
                        Ответить
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="compose" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Написать сообщение</CardTitle>
                <CardDescription>
                  Напишите и отправьте сообщения студентам, преподавателям или группам.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="recipient-type">Тип получателя</Label>
                    <Select>
                      <SelectTrigger id="recipient-type">
                        <SelectValue placeholder="Выберите тип получателя" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="student">Отдельному студенту</SelectItem>
                        <SelectItem value="teacher">Отдельному преподавателю</SelectItem>
                        <SelectItem value="course">Группе курса</SelectItem>
                        <SelectItem value="all-students">Всем студентам</SelectItem>
                        <SelectItem value="all-teachers">Всем преподавателям</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="recipient">Получатель</Label>
                    <Select>
                      <SelectTrigger id="recipient">
                        <SelectValue placeholder="Выберите получателя" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="maria">Мария Родригез</SelectItem>
                        <SelectItem value="james">Джеймс Уилсон</SelectItem>
                        <SelectItem value="anna">Анна Джонсон</SelectItem>
                        <SelectItem value="david">Дэвид Ли</SelectItem>
                        <SelectItem value="sarah">Сара Мартинез</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Тема</Label>
                    <Input id="subject" placeholder="Введите тему" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Сообщение</Label>
                    <Textarea
                      id="message"
                      placeholder="Введите ваше сообщение здесь..."
                      rows={6}
                    />
                  </div>
                  
                  <div className="flex gap-3 justify-end">
                    <Button variant="outline">Сохранить как черновик</Button>
                    <Button>
                      <Send className="mr-2 h-4 w-4" />
                      Отправить сообщение
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default CommunicationsPage;
