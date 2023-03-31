import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TicketSectionComponent } from './tickets/ticket-section/ticket-section.component';
import { TicketListComponent } from './tickets';
import { StudentListComponent } from './students/student-list/student-list.component';
import { StudentSectionComponent } from './students/student-section/student-section.component';

const routes: Routes = [
  { path: 'manage-tickets', component: TicketSectionComponent },
  { path: 'manage-students', component: StudentSectionComponent },
  { path: 'list-tickets', component: TicketListComponent }, 
  { path: 'list-students', component: StudentListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
