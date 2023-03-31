import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Student } from 'src/models/student';
import { StudentService } from 'src/services/student/student.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent {

  public studentForm: FormGroup;
  
  @Output()
  studentHasBeenAdded = new EventEmitter();

  constructor(public formBuilder: FormBuilder, public studentService: StudentService) {
    this.studentForm = this.formBuilder.group({
      firstname: [''], 
      lastname: ['']
    });
  }

  addStudent() {
    const studentToCreate: Student = this.studentForm.getRawValue() as Student;
    this.studentService.addStudent(studentToCreate).subscribe(() => this.studentHasBeenAdded.emit());
  }

}
