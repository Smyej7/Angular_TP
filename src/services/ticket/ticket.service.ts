import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs/index';

import { Ticket } from '../../models/ticket';
import { TICKETS_MOCKED } from '../../mocks/tickets.mock';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  private tickets: Ticket[] = TICKETS_MOCKED;

  getTickets(): Observable<Ticket[]> {
    const heroes = of(this.tickets);
    return heroes;
  }

  addTicket(ticket: Ticket) {
    this.tickets.push(ticket);
  }
}
