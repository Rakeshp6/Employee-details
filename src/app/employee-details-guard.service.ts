import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { EmployeeService } from './Services/employee.service';

@Injectable()
export class EmployeeDetailsGuardService  implements CanActivate{


      constructor(private _employeeService:EmployeeService,private _route:Router){}
      canActivate(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot):Observable <boolean>  {
        
      return    this._employeeService.getEmployee(+route.paramMap.get('id')).pipe(
              map(employee => {
              
              const employeelist=!! employee
  
              if(employeelist)
              {
                  return true;
              }
              else{
                  this._route.navigate(['/notfound']);
                  return false; 
              }
              
          })
          
          )
        
         
      }
      
  }

