import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/index';

import { HttpClient } from '@angular/common/http';
import { Ticket } from 'src/models/ticket';


@Injectable({
  providedIn: 'root'
})
export class TicketService {

  private baseUrl = 'http://localhost:9428/api/tickets';

  constructor(private http: HttpClient) {}

  getTickets(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
  
  addTicket(ticket: Ticket): Observable<any> {
    return this.http.post(this.baseUrl, ticket);
  }

  updateTicket(ticket: Ticket): Observable<any> {
    const url = `${this.baseUrl}/${ticket.id}`
    return this.http.put(url, ticket);
  }
  
  deleteTicket(id: number): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete(url);
  }
  
}
