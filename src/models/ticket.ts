import { Student } from "./student";

export interface Ticket {
  id: number,
  title: string;
  description?: string;
  date: Date;
  student?: Student;
  major: Major;
  archived: boolean;
}

export enum Major {
  SI = "SI", 
  GE = "GE", 
  GB = "GB"
}