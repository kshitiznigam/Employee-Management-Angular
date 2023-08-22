import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  data: any;
  username: string = '';
  password: string = '';
  selectedOption: string = '';

  constructor(private http: HttpClient, private router: Router,private toastr: ToastrService) {}

  onOptionChange(event: any) {
    this.selectedOption = event.target.value;
  }

  userLogin() {
    const hardcodedUsername = 'admin';
    const hardcodedPassword = 'admin@123';

  if (this.username === hardcodedUsername && this.password === hardcodedPassword) {
    this.router.navigate(['/timesheet-Status']);
  } else {
    alert('Invalid username or password');
  }


  }

//     this.http.post<any>('http://localhost:8080/sign-in', loginData).subscribe(
//       (response) => {
//         // Handle success response
//         this.data=response
//         const type = response.type;
//         const id = response.id;
//         if (type === 'employee') {
//           // this.toastr.success("SuccessFully Log in")
//           this.router.navigate(['/employee', id]);
          
//         } else if (type === 'Manager') {
//           // this.toastr.success("SuccessFully Log in")
//           this.router.navigate(['/admin', id]);
//         } else {
//           // Handle unknown type or other conditions
//           // this.toastr.error(this.data.dataSet[0]);
//         }
//       },
//       (error) => {
//         // Handle error response
// // this.toastr.error("Something is wrong");
//         console.log(error);
        
//       }
//     );
  }

