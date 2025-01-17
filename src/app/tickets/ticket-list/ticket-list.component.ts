import { Component, OnInit, Input } from '@angular/core';
import { TicketService } from '../../../services/ticket/ticket.service';
import { Ticket } from '../../../models/ticket';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.scss']
})
export class TicketListComponent implements OnInit {

  @Input()
  public ticketList: Ticket[] = [];
  public displayTicketArchived: boolean = false;

  constructor(public ticketService: TicketService) {}

  ngOnInit(): void {
    // this.getTickets();
  }

  getTickets() {
    console.log('getTickets called from ticket list');
    this.ticketService.getTickets()
    .subscribe((tickets) => this.ticketList = tickets);
  }

  toggleDisplayTicketArchived() {
    this.displayTicketArchived = !this.displayTicketArchived;
  }
}
