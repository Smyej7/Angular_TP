import { Component, OnInit } from '@angular/core';
import { Student } from 'src/models/student';
import { StudentService } from 'src/services/student/student.service';

@Component({
  selector: 'app-student-section',
  templateUrl: './student-section.component.html',
  styleUrls: ['./student-section.component.css']
})
export class StudentSectionComponent {

  students: Student[];

  constructor(public studentService: StudentService) {}

  studentHasBeenAdded() {
    this.studentService.getStudents().subscribe((students) => this.students = students);
  }
}
