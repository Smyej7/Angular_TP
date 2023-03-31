import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { STUDENTS_MOCKED } from 'src/mocks/students.mock';
import { TICKETS_MOCKED } from 'src/mocks/tickets.mock';
import { Student } from 'src/models/student';
import { Ticket } from 'src/models/ticket';
//import { Student } from 'src/models/student';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const students: Student[] = STUDENTS_MOCKED;
    const tickets: Ticket[] = TICKETS_MOCKED;

    const data = {
      students,
      tickets,
    };

    return data;
  }

  // Overrides the genId method to ensure that a ticket or a student always has an id.
  // If the array is empty,
  // the method below returns the initial number (11).
  // if the array is not empty, the method below returns the highest
  // id + 1.
  genId(items: (Ticket | Student)[]): number {
    return items.length > 0 ? Math.max(...items.map((item) => item.id)) + 1 : 11;
  }
  
  
  
}