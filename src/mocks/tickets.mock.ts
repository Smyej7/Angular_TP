import { Major, Ticket } from '../models/ticket';

const dateToday: Date = new Date();

export const TICKETS_MOCKED: Ticket[] = [
  {
    title: '1 in Fes',
    description: '',
    date: dateToday,
    student: 'Paul', 
    major: Major.SI, 
    archived: true
  },
  {
    title: '2 in Paris',
    description: 'Description du voyage',
    date: dateToday,
    student: 'Anakin', 
    major: Major.GE, 
    archived: true
  },
  {
    title: '3 in Kinshasa',
    description: 'Description du voyage',
    date: dateToday,
    student: 'Likan', 
    major: Major.GB, 
    archived: false
  },
  {
    title: '4 in London',
    description: 'Description du voyage',
    date: dateToday,
    student: 'Wan', 
    major: Major.GE, 
    archived: false
  },
];
