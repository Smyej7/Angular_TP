import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

import { STUDENTS_MOCKED } from "src/mocks/students.mock";
import { Student } from "src/models/student";

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private studentsUrl = 'api/students';

  constructor(private http: HttpClient) {}

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.studentsUrl);
  }
}