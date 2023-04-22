import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { HttpClient } from '@angular/common/http';
import { Student } from "src/models/student";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseUrl = 'http://localhost:9428/api/students';

  constructor(private http: HttpClient) {}

  getStudents(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
  
  addStudent(student: Student): Observable<any> {
    return this.http.post<Student>(this.baseUrl, student);
  }
  
  deleteStudent(id: number): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete(url);
  }

  getStudent(id: number): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get(url);
  }

  updateStudent(student: Student): Observable<any> {
    const url = `${this.baseUrl}/${student.id}`;
    return this.http.put(url, student);
  }
  
}