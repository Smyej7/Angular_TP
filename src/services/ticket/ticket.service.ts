import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/index';

import { Ticket } from '../../models/ticket';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { mergeMap, filter, toArray } from 'rxjs/operators';
import { from } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TicketService {

  private ticketsUrl = 'api/tickets';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {}

  getTickets(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(this.ticketsUrl);
  }

  /** POST: add a new ticket to the server */
  addTicket(ticket: Ticket): Observable<Ticket> {
    return this.http.post<Ticket>(this.ticketsUrl, ticket, this.httpOptions);
  }

  deleteTicket(id: number): Observable<Ticket> {
    const url = `${this.ticketsUrl}/${id}`;
    return this.http.delete<Ticket>(url, this.httpOptions);
  }
  
}
