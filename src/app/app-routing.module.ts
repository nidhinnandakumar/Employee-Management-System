import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListDepartmentComponent } from './department/list-department/list-department.component';
import { AddDepartmentComponent } from './department/add-department/add-department.component';

import { UpdatedepartmentComponent } from './department/update-department/update-department.component';
import { ListemployeeComponent } from './employee/list-employee/list-employee.component';
import { AddemployeeComponent } from './employee/add-employee/add-employee.component';
import { UpdateemployeeComponent } from './employee/update-employee/update-employee.component';
import { RegisterComponent } from './Authentication/register/register.component';
import { LoginComponent } from './Authentication/login/login.component';
import { routeAuthGuard } from './Authentication/route-auth.guard';


const routes: Routes = [
  {path:'departments',component:ListDepartmentComponent,canActivate:[routeAuthGuard]},
  {path:'departments/add',component:AddDepartmentComponent,canActivate:[routeAuthGuard]},
  {path:'departments/edit/:id',component:UpdatedepartmentComponent,canActivate:[routeAuthGuard]},
  {path:'employee',component:ListemployeeComponent,canActivate:[routeAuthGuard]},
  {path:'employee/add',component:AddemployeeComponent,canActivate:[routeAuthGuard]},
  {path:'employee/edit/:id',component:UpdateemployeeComponent,canActivate:[routeAuthGuard]},
  {path:'register',component:RegisterComponent},
  {path:'',component:LoginComponent},
  {path:'logout',component:LoginComponent,canActivate:[routeAuthGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
