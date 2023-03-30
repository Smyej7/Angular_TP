import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ticket } from '../../../models/ticket';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {

  /**
   * Inputs & Output allow communication between parent & child components.
   * More information: https://angular.io/guide/component-interaction
   */
  @Input()
  ticket: Ticket;

  @Output() notifyDelete = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  deleteTicket() {
    this.notifyDelete.emit(this.ticket);
  }

  changeArchiveStateTicket() {
    this.ticket.archived = !this.ticket.archived;
  }
}
