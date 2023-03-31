import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/models/ticket';
import { TicketService } from 'src/services/ticket/ticket.service';

@Component({
  selector: 'app-ticket-section',
  templateUrl: './ticket-section.component.html',
  styleUrls: ['./ticket-section.component.css']
})
export class TicketSectionComponent {

  tickets: Ticket[];

  constructor(public ticketService: TicketService) {}

  ticketHasBeenAdded() {
    this.ticketService.getTickets().subscribe((tickets) => this.tickets = tickets);
  }
}
