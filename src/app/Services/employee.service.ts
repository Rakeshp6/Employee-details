import { Injectable } from '@angular/core';
import { Employee } from '../Models/employee.model';
import { Observable,of} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private listEmployees:Employee []=[
    {
    id:1,
    firstName:"Arun",
    lastName:"sv",
    gender:"Male",
    age:28,
    dataOfBirth:new Date("8/12/1890"),
    email:"arunsv@gmail.com"
  },
  {
    id:2,
    firstName:"Rashmi",
    lastName:"k",
    gender:"Female",
    age:22,
    dataOfBirth:new Date("2/14/1991"),
    email:"rashmik@gmail.com"
  },
  {
    id:3,
    firstName:"varun",
    lastName:"v",
    gender:"Male",
    age:38,
    dataOfBirth:new Date("5/6/1899"),
    email:"varunv@gmail.com"
  },
  ]

  constructor() { }

  getEmployees() :Observable<Employee[]>
  {
    return of(this.listEmployees);
  }

  getEmployee(id:number) :Employee
  {
    return this.listEmployees.find(e=>e.id === id);
  }

  saveEmployee(employee:Employee)
  {
    if(employee.id === null)
    {
 const maxid = this.listEmployees.reduce( (e1,e2) => 
      {
        return (e1.id > e2.id ) ? e1 :e2   
      
      }).id;
      employee.id = maxid ;
      this.listEmployees.push(employee)
    }else{
      const foundIndex=this.listEmployees.findIndex( e => e.id === employee.id);
      this.listEmployees[foundIndex]=employee;
    }
    
  }
 
  deleteEmployee(id:number)
  {
    const i=this.listEmployees.findIndex(e => e.id === id)
  if(i !== -1)
  {
    this.listEmployees.splice(i,1);
  }
  }

}
