import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-leave-form',
  templateUrl: './leave-form.component.html',
  styleUrls: ['./leave-form.component.scss'],
})
export class LeaveFormComponent {
  [x: string]: any;
  data: any;
  id: number = 0;
  empId!: number;
  leaveType: string = ''; // Updated property name
  leaveReason: string = ''; // Updated property name
  startDate: string = '';
  endDate: string = '';
  approval: string = 'pending';

  




  constructor(
    private http: HttpClient,
    private toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('id')); // Retrieve and set the 'id' from the URL
    });
  }

  postEmployees() {
    const employeeData = {
      
      empId: this.empId,
      type: this.leaveType, // Updated property name
      reason: this.leaveReason, // Updated property name
      start_Date: this.startDate,
      end_Date: this.endDate,
      approval: this.approval,
    };
    console.log('Employee Data:', employeeData);
    // this.http
    //   .post('http://localhost:8080/employee/applyleave', employeeData)
    //   .subscribe(
    //     (response) => {
    //       // this.toastr.success('Successfully Submitted');
    //       this.router.navigate(['/employee', this.id]); // Pass the 'id' as a parameter
    //     },
    //     (error) => {
    //       this.toastr.error("Something is wrong");
    //       console.error('Error occurred while sending employee data:', error);
    //       // Handle any errors that occur during the request
    //     }
    //   );
  }
}
