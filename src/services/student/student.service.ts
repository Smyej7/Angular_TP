import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

import { STUDENTS_MOCKED } from "src/mocks/students.mock";
import { Student } from "src/models/student";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  getStudents(): Observable<Student[]> {
    const students = of(STUDENTS_MOCKED);
    return students;
  }
}