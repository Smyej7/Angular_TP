import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TicketService } from '../../../services/ticket/ticket.service';
import { Major, Ticket } from '../../../models/ticket';
import { StudentService } from 'src/services/student/student.service';
import { Student } from 'src/models/student';

@Component({
  selector: 'app-ticket-form',
  templateUrl: './ticket-form.component.html',
  styleUrls: ['./ticket-form.component.css']
})
export class TicketFormComponent implements OnInit {

  public ticketForm: FormGroup;
  public MAJORS_LIST = Object.values(Major);
  public STUDENTS_LIST: Student[] = [];
  public foods = ['pizza', 'kebab']

  @Output()
  ticketHasBeenAdded = new EventEmitter();

  constructor(public formBuilder: FormBuilder, public ticketService: TicketService, public studentService: StudentService) {
  }

  ngOnInit(): void {
    this.clearForm();
    this.getStudents();
  }

  getStudents() {
    this.studentService.getStudents()
    .subscribe((students) => this.STUDENTS_LIST = students);
  }

  addTicket() {
    const ticketToCreate: Ticket = this.ticketForm.getRawValue() as Ticket;
    ticketToCreate.date = new Date();
    const studentId = this.ticketForm.value.studentId;
    ticketToCreate.student = this.STUDENTS_LIST.find((s) => s.id == studentId);
    this.ticketService.addTicket(ticketToCreate)
    .subscribe(() => this.ticketHasBeenAdded.emit());
    this.clearForm();
  }

  clearForm() {
    this.ticketForm = this.formBuilder.group({
      title: [''],
      description: [''],
      major: [Major.SI],
      archived: false, 
      studentId: ['']
    });
  }

}
