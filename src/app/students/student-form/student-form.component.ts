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
  public teams = [
    'saint-gall', 
    'salford-city', 
    'san-carlos', 
    'sandefjord', 
    'santa-fe', 
    'san-telmo', 
    'sarpsborg-08', 
    'schermbeck',
    'schonnebeck',
    'schwarz-weiss-essen'
  ];

  @Output()
  studentHasBeenAdded = new EventEmitter();

  constructor(public formBuilder: FormBuilder, public studentService: StudentService) {
    this.clearForm();
  }

  addStudent() {
    const studentToCreate: Student = this.studentForm.getRawValue() as Student;
    studentToCreate.img = studentToCreate.img + '.png';
    console.log(studentToCreate)
    this.studentService.addStudent(studentToCreate).subscribe(() => this.studentHasBeenAdded.emit());
    this.clearForm();
  }

  clearForm() {
    this.studentForm = this.formBuilder.group({
      firstname: '', 
      lastname: '',
      img: ''
    });
  }
}
