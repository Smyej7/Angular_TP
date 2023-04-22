import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ticket } from '../../../models/ticket';
import { TicketService } from 'src/services/ticket/ticket.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent {

  @Input()
  ticket: Ticket;

  @Output()
  deleteTicket = new EventEmitter();

  constructor(public ticketService: TicketService) {}

  changeArchiveStateTicket() {
    this.ticket.archived = !this.ticket.archived;
    this.ticketService.updateTicket(this.ticket);
  }

  delete(): void {
    this.ticketService.deleteTicket(this.ticket.id).subscribe(() => this.deleteTicket.emit());
  }
}
