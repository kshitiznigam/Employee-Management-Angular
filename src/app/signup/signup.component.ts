import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  id: any;
  name: string = '';
  email_Id: string = '';
  empId !: number 
  phno !: number 
  department: string = '';
  type: string = '';
  password: string = '';

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    // Rest of your code
  }

  postEmployees() {
    const employeeData = {
      name: this.name,
      email_Id: this.email_Id,
      empId: this.empId,
      phno: this.phno,
      department: this.department,
      type: this.type,
      password: this.password,
    };

    // const url = `http://localhost:8080/manager/addEmployee/${this.id}`; // Update URL here

    // this.http.post(url, employeeData).subscribe(
    //   (response) => {
    //     console.log('Employee data sent successfully:', response);
    //     // You can perform additional actions here after successful data submission
    //   },
    //   (error) => {
    //     console.error('Error occurred while sending employee data:', error);
    //     // Handle any errors that occur during the request
    //   }
    // );
  }
}
