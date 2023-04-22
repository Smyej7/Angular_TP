import { Component, Input, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import {FormBuilder, FormGroup } from '@angular/forms';
import { Student } from 'src/models/student';
import { StudentService } from 'src/services/student/student.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  @Input() student?: Student;

  public studentForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private studentService: StudentService,
    private location: Location
  ) {
    this.studentForm = this.formBuilder.group({
      firstname: '', 
      lastname: '',
      notes: '',
      img: 'student.img'
    });
  }

  ngOnInit(): void {
    this.getStudent();
  }

  getStudent(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.studentService.getStudent(id)
      .subscribe(student => {
        this.student = student;
        
        this.studentForm = this.formBuilder.group({
          firstname: student.firstname, 
          lastname: student.lastname,
          notes: student.notes,
          img: student.img
        });
        console.log('student:', student);
    },
    error => console.log('student not found:', error));
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    const updatedStudent: Student = this.studentForm.getRawValue() as Student;
    updatedStudent.id = this.student.id;
    if (this.student) {
      this.studentService.updateStudent(updatedStudent)
        .subscribe(() => this.goBack());
    }
  }

  delete(): void {
    
  }

  getErrorMessage() {
    // return this.firstname.hasError('required') ? 'You must enter a value' : '';
    return 'err';
  }
}