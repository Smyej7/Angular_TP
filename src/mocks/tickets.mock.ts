import { Student } from 'src/models/student';
import { Major, Ticket } from '../models/ticket';
import { STUDENTS_MOCKED } from './students.mock';

const dateToday: Date = new Date();
const students = STUDENTS_MOCKED;

export const TICKETS_MOCKED: Ticket[] = [
  {
    title: '1 in Fes',
    description: '',
    date: dateToday,
    student: STUDENTS_MOCKED[0], 
    major: Major.SI, 
    archived: true
  },
  {
    title: '2 in Paris',
    description: 'Description du voyage',
    date: dateToday,
    student: STUDENTS_MOCKED[1], 
    major: Major.GE, 
    archived: true
  },
  {
    title: '3 in Kinshasa',
    description: 'Description du voyage',
    date: dateToday,
    student: STUDENTS_MOCKED[2], 
    major: Major.GB, 
    archived: false
  },
  {
    title: '4 in London',
    description: 'Description du voyage',
    date: dateToday,
    student: STUDENTS_MOCKED[3], 
    major: Major.GE, 
    archived: false
  },
];