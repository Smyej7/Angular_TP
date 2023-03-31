import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/models/ticket';
import { TicketService } from 'src/services/ticket/ticket.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  tickets: Ticket[];

  constructor(public ticketService: TicketService) {}

  ticketHasBeenAdded() {
    this.ticketService.getTickets().subscribe((tickets) => this.tickets = tickets);
  }
}
