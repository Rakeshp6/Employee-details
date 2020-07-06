import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateEmployeeComponent } from './Components/create-employee/create-employee.component';
import { HeaderComponent } from './Shared/header/header.component';
import { FooterComponent } from './Shared/footer/footer.component';
import { ListEmployeeComponent } from './Components/list-employee/list-employee.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { EmployeeService } from './Services/employee.service';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { EmployeeDetailsGuardService } from './employee-details-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    CreateEmployeeComponent,
    HeaderComponent,
    FooterComponent,
    ListEmployeeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    AppRoutingModule,ReactiveFormsModule,CommonModule,FormsModule,
  ],
  providers: [EmployeeService,EmployeeDetailsGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
