import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Student } from 'src/models/student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {

  @Input()
  student: Student;

  @Output()
  notifyDelete: EventEmitter<Student> = new EventEmitter<Student>();

  deleteStudentClicked() {
    this.notifyDelete.emit(this.student);
  }
}
