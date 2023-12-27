import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddDepartmentComponent } from './department/add-department/add-department.component';
import { ListDepartmentComponent } from './department/list-department/list-department.component';
import { AddemployeeComponent } from './employee/add-employee/add-employee.component';

import { ReactiveFormsModule } from '@angular/forms';
import { UpdatedepartmentComponent } from './department/update-department/update-department.component';
import { ListemployeeComponent } from './employee/list-employee/list-employee.component';
import { UpdateemployeeComponent } from './employee/update-employee/update-employee.component';
import { DatePipe } from '@angular/common';
import { LoginComponent } from './Authentication/login/login.component';
import { RegisterComponent } from './Authentication/register/register.component';
import { TokenInterceptor } from './Authentication/token.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    AddDepartmentComponent,
    ListDepartmentComponent,
    UpdatedepartmentComponent,
    ListemployeeComponent,
    AddemployeeComponent,
    UpdateemployeeComponent,
    LoginComponent,
    RegisterComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [DatePipe,{provide:HTTP_INTERCEPTORS,useClass:TokenInterceptor,multi:true}],
  bootstrap: [AppComponent]
})

export class AppModule { }
