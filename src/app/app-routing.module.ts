import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateEmployeeComponent } from './Components/create-employee/create-employee.component';
import { ListEmployeeComponent } from './Components/list-employee/list-employee.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';



const routes: Routes = [
  { path: '' , redirectTo: 'create' , pathMatch: 'full'},
  { path: 'create',component:CreateEmployeeComponent},
  { path: 'employee/edit/:id',component:CreateEmployeeComponent},
  { path: 'list-employee',component:ListEmployeeComponent},
  { path: 'notfound' ,component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
