import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useStudents } from "@/contexts/StudentContext";

const formSchema = z.object({
  fullName: z.string().min(2, {
    message: "ФИО должно содержать не менее 2 символов.",
  }),
  email: z.string().email({
    message: "Пожалуйста, введите корректный email адрес.",
  }),
  phone: z.string().min(6, {
    message: "Номер телефона должен содержать не менее 6 символов.",
  }),
  dateOfBirth: z.date({
    required_error: "Дата рождения обязательна.",
  }),
  level: z.string({
    required_error: "Пожалуйста, выберите уровень языка.",
  }),
  status: z.string().default("active"),
});

interface StudentFormProps {
  onSuccess?: () => void;
}

export const StudentForm: React.FC<StudentFormProps> = ({ onSuccess }) => {
  const { toast } = useToast();
  const { addStudent } = useStudents();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      status: "active",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    addStudent({
      fullName: values.fullName,
      email: values.email,
      phone: values.phone,
      dateOfBirth: values.dateOfBirth,
      level: values.level,
      status: values.status as "active" | "paused" | "completed",
    });

    toast({
      title: "Студент успешно зарегистрирован",
      description: `${values.fullName} был(а) добавлен(а) в систему.`,
    });
    
    form.reset();
    
    if (onSuccess) {
      onSuccess();
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>ФИО</FormLabel>
              <FormControl>
                <Input placeholder="Иван Иванов" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="ivan.ivanov@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Номер телефона</FormLabel>
                <FormControl>
                  <Input placeholder="+7 (999) 123-4567" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="dateOfBirth"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Дата рождения</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Выберите дату</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) =>
                        date > new Date() || date < new Date("1900-01-01")
                      }
                      initialFocus
                      className={cn("p-3 pointer-events-auto")}
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="level"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Уровень языка</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите уровень" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="beginner">Начинающий (A1)</SelectItem>
                    <SelectItem value="elementary">Элементарный (A2)</SelectItem>
                    <SelectItem value="intermediate">Средний (B1)</SelectItem>
                    <SelectItem value="upperIntermediate">Выше среднего (B2)</SelectItem>
                    <SelectItem value="advanced">Продвинутый (C1)</SelectItem>
                    <SelectItem value="proficient">Свободный (C2)</SelectItem>
                  </SelectContent>
                </Select>
                <FormDescription>
                  Текущий уровень владения языком студента.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        <FormField
          control={form.control}
          name="status"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Статус</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите статус" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="active">Активный</SelectItem>
                  <SelectItem value="paused">На паузе</SelectItem>
                  <SelectItem value="completed">Завершил курс</SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>
                Текущий статус обучения студента.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button type="submit" className="w-full md:w-auto">Зарегистрировать студента</Button>
      </form>
    </Form>
  );
};
