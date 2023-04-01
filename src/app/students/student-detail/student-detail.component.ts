import { Component, Input, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Student } from 'src/models/student';
import { StudentService } from 'src/services/student/student.service';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {
  
  @Input() student?: Student;
  firstname: string;
  lastname: string;

  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getStudent();
  }
  
  getStudent(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.studentService.getStudent(id)
      .subscribe(student => {
        this.student = student;
        this.firstname = student.firstname;
        this.lastname = student.lastname;
    });
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.student) {
      this.studentService.updateStudent(this.student)
        .subscribe(() => this.goBack());
    }
  }

}