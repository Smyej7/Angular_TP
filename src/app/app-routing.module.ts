import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TicketListComponent } from './tickets';
import { StudentListComponent } from './students/student-list/student-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'tickets', component: TicketListComponent }, 
  { path: 'students', component: StudentListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
