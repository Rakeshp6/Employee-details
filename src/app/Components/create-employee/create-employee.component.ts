import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators ,FormControl, NgForm } from '@angular/forms';
import {BsDatepickerConfig} from 'ngx-bootstrap/datepicker';
import { Employee } from 'src/app/Models/employee.model';
import { EmployeeService } from '../../Services/employee.service';
import {Router, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
private _id:number;
  employeeForm: FormGroup;
  submitted = false;
  panelTitle:string;
  employee:Employee = {id:null, firstName: null, lastName: null,gender:null,age:null,dataOfBirth:null,email:null };
  datePickerConfig:Partial<BsDatepickerConfig>;

  constructor(private formBuilder: FormBuilder ,private _router:Router ,private _route:ActivatedRoute,private _employeeService:EmployeeService) { 
    this.datePickerConfig=Object.assign({},{containerClass:'theme-dark-blue',showWeekNumbers: false} )
  }

  ngOnInit(): void {

this._route.paramMap.subscribe(parameterMap =>
  {
   const id= +parameterMap.get('id');
   this.getEmployee(id);
  })




 
    this.creatingEmployeeNewForm();
  //   this.employeeForm = this.formBuilder.group({
  //     firstName: ['', Validators.required],
  //     lastName: ['', Validators.required],
  //     gender:['',Validators.required],
  //     age:['',Validators.required],
  //     DoB:['',Validators.required],
  //     email: ['', [Validators.required, Validators.email]],
  // })

  }


  private getEmployee(id:number)
  {
    if(id === 0)
    {
      this.employee={
      id :null,
      firstName:null,
      lastName:null,
      gender:null,
      age:null,
      dataOfBirth: null,
      email:null,
      } 
      
      this.panelTitle='Submit'
    }else{
      this.panelTitle='Update'
      this.employee=Object.assign({},this._employeeService.getEmployee(id));
    }


  }



creatingEmployeeNewForm() 
{
  this.employeeForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    gender:['',Validators.required],
    age:['',Validators.required],
    DoB:['',Validators.required]
})
}

get f() { return this.employeeForm.controls; }

onSubmit() {
  
  this.submitted = true;

  // stop here if form is invalid
  if (this.employeeForm.invalid) {
      return;
  }
const newEmployee:Employee = Object.assign({},this.employee)
this._employeeService.saveEmployee(newEmployee);
this._router.navigate(['/list-employee'])
}
}
