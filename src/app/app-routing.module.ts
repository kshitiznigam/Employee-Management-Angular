import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { EmployeeComponent } from './employee/employee.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { LeaveApplyComponent } from './leave-apply/leave-apply.component';
import { ManagerUEmployeeComponent } from './manager-u-employee/manager-u-employee.component';
import { LeaveFormComponent } from './leave-form/leave-form.component';
import { EmployeeTimesheetComponent } from './employee-timesheet/employee-timesheet.component';
import { ManagerUTimesheetComponent } from './manager-u-timesheet/manager-u-timesheet.component';
import { AddManagerComponent } from './add-manager/add-manager.component';
// import { LopComponent } from './lop/lop.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { ProjectAssignedComponent } from './project-assigned/project-assigned.component';
import { LeaveStatusComponent } from './leave-status/leave-status.component';
import { TimesheetStatusComponent } from './timesheet-status/timesheet-status.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'leave-form', component: LeaveFormComponent },
  { path: 'home', component: HomeComponent },
  { path: 'TimeSheet', component: ManagerUTimesheetComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'timesheet', component: EmployeeTimesheetComponent },
  { path: 'employee', component: EmployeeComponent },
  { path: 'project-assigned', component: ProjectAssignedComponent },
  { path: 'employee', component: EmployeeComponent },
  { path: 'Leave-Status', component: LeaveStatusComponent },
  { path: 'timesheet-Status', component: TimesheetStatusComponent },
  { path: 'login', component: LoginComponent },
  // { path: 'lop/:id', component: LopComponent },
  { path: 'add-employee', component: SignupComponent },
  { path: 'add', component: AddProjectComponent },
  {path: 'update-employee', component:UpdateEmployeeComponent},

  { path: 'leave/:id', component: LeaveApplyComponent },
  { path: 'admin-employee', component: ManagerUEmployeeComponent },
  { path: 'add-manager', component: AddManagerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), BrowserModule, HttpClientModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
