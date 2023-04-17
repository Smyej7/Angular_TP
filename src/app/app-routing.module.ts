import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TicketSectionComponent } from './tickets/ticket-section/ticket-section.component';
import { TicketListComponent } from './tickets';
import { StudentListComponent } from './students/student-list/student-list.component';
import { StudentSectionComponent } from './students/student-section/student-section.component';
import { StudentDetailComponent } from './students/student-detail/student-detail.component';
import { TableBasicComponent } from './table-basic/table-basic.component';

const routes: Routes = [
  { path: '', component: TableBasicComponent },
  { path: 'manage-tickets', component: TicketSectionComponent },
  // { path: 'list-tickets', component: TicketListComponent },

  { path: 'manage-students', component: StudentSectionComponent },
  // { path: 'list-students', component: StudentListComponent },
  { path: 'student/:id', component: StudentDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
