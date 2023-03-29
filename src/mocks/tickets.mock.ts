import { Major, Ticket } from '../models/ticket';

const dateToday: Date = new Date();

export const TICKETS_MOCKED: Ticket[] = [
  {
    title: '4 in Fes',
    description: '',
    date: dateToday,
    student: 'Paul', 
    major: Major.SI
  },
  {
    title: '5 in Paris',
    description: 'Description du voyage',
    date: dateToday,
    student: 'Anakin', 
    major: Major.GE
  },
  {
    title: '5 in Kinshasa',
    description: 'Description du voyage',
    date: dateToday,
    student: 'Likan', 
    major: Major.GB
  },
  {
    title: '5 in London',
    description: 'Description du voyage',
    date: dateToday,
    student: 'Wan', 
    major: Major.GE
  },
];
