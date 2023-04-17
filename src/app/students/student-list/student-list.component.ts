import { Component, Input, OnInit } from '@angular/core';
import { Student } from 'src/models/student';
import { StudentService } from 'src/services/student/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  displayedColumns: string[] = ['image', 'firstname', 'lastname'];
  
  @Input()
  public studentList: Student[] = [];

  constructor(public studentService: StudentService) {}

  ngOnInit(): void {
    this.getStudents();
  }

  getStudents() {
    this.studentService.getStudents()
    .subscribe((students) => this.studentList = students);
  }

  deleteStudent(student: Student) {
    this.studentList = this.studentList.filter(s => s !== student);
    this.studentService.deleteStudent(student.id)
    .subscribe(() => this.getStudents());
  }
}
