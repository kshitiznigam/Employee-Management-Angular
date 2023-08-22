import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-manager',
  templateUrl: './add-manager.component.html',
  styleUrls: ['./add-manager.component.scss'],
})
export class AddManagerComponent {
  constructor(private http: HttpClient) {}
  name: string = '';
  empid !: number;
  phoneno!: number 
  emailid: string = '';
  password: string = '';

  submitForm() {
  //   const url = 'http://localhost:8080/manager/sign-up';
  //   const data = {
  //     name: this.name,
  //     empid: this.empid,
  //     phoneno: this.phoneno,
  //     password: this.password,
  //     emailid: this.emailid,
  //   };

  //   // Send the POST request
  //   this.http.post(url, data).subscribe(
  //     (response) => {
  //       console.log('Sign up successful!', response);
  //     },
  //     (error) => {
  //       console.log('Sign up failed:', error);
  //     }
  //   );
  // }
}
}
