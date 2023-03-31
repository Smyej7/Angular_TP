import { Component, Input, OnInit } from '@angular/core';
import { Student } from 'src/models/student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {

  @Input()
  student: Student;

}
