import { Component, OnInit,Input } from '@angular/core';
import { Employee } from 'src/app/Models/employee.model';
import { EmployeeService } from '../../Services/employee.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {
employees:Employee[] ;

  constructor(private _route:Router ,private _employeeService:EmployeeService) { }

  ngOnInit() {
  this._employeeService.getEmployees().subscribe(emp =>this.employees = emp);
  }

  updateEmployee(employeeId:number)
  {
this._route.navigate(['/employee/edit',employeeId])
  }

deleteEmp(employeeId:number)
{

  console.log("delete")
  this._employeeService.deleteEmployee(employeeId);
}

}
