
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
    title: "Payment Reminder",
    description: "Automatic payment reminder for students with upcoming dues",
    recipients: 5,
    status: "scheduled",
    date: "2023-06-20",
  },
  {
    id: "2",
    title: "Class Reminder",
    description: "Reminder for tomorrow's advanced English class",
    recipients: 12,
    status: "sent",
    date: "2023-06-15",
  },
  {
    id: "3",
    title: "New Course Announcement",
    description: "Announcement for the new Business Spanish course",
    recipients: 45,
    status: "sent",
    date: "2023-06-10",
  },
  {
    id: "4",
    title: "Holiday Schedule",
    description: "Information about the upcoming holiday schedule",
    recipients: 120,
    status: "draft",
    date: "2023-06-25",
  },
];

const messages = [
  {
    id: "1",
    student: "Maria Rodriguez",
    content: "Is the homework due tomorrow or next week?",
    date: "2023-06-15 14:30",
    status: "unread",
  },
  {
    id: "2",
    student: "James Wilson",
    content: "I need to reschedule my lesson on Thursday.",
    date: "2023-06-14 10:15",
    status: "read",
  },
  {
    id: "3",
    student: "Anna Johnson",
    content: "Thank you for the additional materials.",
    date: "2023-06-13 16:45",
    status: "read",
  },
];

const CommunicationsPage = () => {
  return (
    <MainLayout>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Communications</h1>
          <p className="text-muted-foreground">
            Manage notifications, messages, and stay in touch with students and teachers.
          </p>
        </div>
        
        <Tabs defaultValue="notifications">
          <TabsList>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="messages">Messages</TabsTrigger>
            <TabsTrigger value="compose">Compose</TabsTrigger>
          </TabsList>
          
          <TabsContent value="notifications" className="mt-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Notifications & Reminders</CardTitle>
                  <CardDescription>
                    Manage automated notifications and reminders for students and staff.
                  </CardDescription>
                </div>
                <Button>
                  <BellRing className="mr-2 h-4 w-4" />
                  New Notification
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
                            <Badge variant="outline" className="text-blue-500 border-blue-500">Scheduled</Badge>
                          ) : notification.status === "sent" ? (
                            <Badge className="bg-green-500">Sent</Badge>
                          ) : (
                            <Badge variant="outline">Draft</Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">{notification.description}</p>
                        <div className="flex text-xs text-muted-foreground mt-2">
                          <span>Recipients: {notification.recipients}</span>
                          <span className="mx-2">•</span>
                          <span>Date: {notification.date}</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="ghost">Edit</Button>
                        {notification.status === "scheduled" && <Button size="sm" variant="ghost">Cancel</Button>}
                        {notification.status === "draft" && <Button size="sm" variant="outline">Send</Button>}
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
                <CardTitle>Messages</CardTitle>
                <CardDescription>
                  View and respond to student and teacher messages.
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
                            <Badge className="bg-blue-500">New</Badge>
                          )}
                        </div>
                        <p className="text-sm mt-1">{message.content}</p>
                        <div className="text-xs text-muted-foreground mt-2">{message.date}</div>
                      </div>
                      <Button size="sm" variant="outline">
                        <MessageCircle className="mr-2 h-4 w-4" />
                        Reply
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
                <CardTitle>Compose Message</CardTitle>
                <CardDescription>
                  Write and send messages to students, teachers, or groups.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="recipient-type">Recipient Type</Label>
                    <Select>
                      <SelectTrigger id="recipient-type">
                        <SelectValue placeholder="Select recipient type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="student">Individual Student</SelectItem>
                        <SelectItem value="teacher">Individual Teacher</SelectItem>
                        <SelectItem value="course">Course Group</SelectItem>
                        <SelectItem value="all-students">All Students</SelectItem>
                        <SelectItem value="all-teachers">All Teachers</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="recipient">Recipient</Label>
                    <Select>
                      <SelectTrigger id="recipient">
                        <SelectValue placeholder="Select recipient" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="maria">Maria Rodriguez</SelectItem>
                        <SelectItem value="james">James Wilson</SelectItem>
                        <SelectItem value="anna">Anna Johnson</SelectItem>
                        <SelectItem value="david">David Lee</SelectItem>
                        <SelectItem value="sarah">Sarah Martinez</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="Enter subject" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Type your message here..."
                      rows={6}
                    />
                  </div>
                  
                  <div className="flex gap-3 justify-end">
                    <Button variant="outline">Save as Draft</Button>
                    <Button>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
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
