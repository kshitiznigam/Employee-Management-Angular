// import { Component } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { ActivatedRoute } from '@angular/router';

// @Component({
//   selector: 'app-lop',
//   templateUrl: './lop.component.html',
//   styleUrls: ['./lop.component.scss']
// })
// export class LopComponent {
//  id:any
//   constructor(private http: HttpClient,private route: ActivatedRoute) {}
//   // ngOnInit(): void {
//   //   this.id = this.route.snapshot.params['id'];
//   // }
//   ngOnInit() {
//     this.id = this.route.snapshot.params['id'];
//     const duration: number = 10; // Duration in seconds
//     this.runEverySecond(duration);
//   }

//   runEverySecond(durationInSeconds: number): void {
//     let n: number = 0;

//     const intervalId: number = setInterval(() => {
//       if (n >= durationInSeconds) {
//         clearInterval(intervalId);
//         console.log(intervalId);
//       } else {
       

//         console.log('Employee Data:', n);
//         const url: string = `http://localhost:8080/manager/lop/500167/${n}`;
//         this.http
//           .post(url, n)
//           .subscribe(
//             (response) => {
//               console.log('Employee data sent successfully:', response);
//               // You can perform additional actions here after successful data submission
//             },
//             (error) => {
//               console.error('Error occurred while sending employee data:', error);
//               // Handle any errors that occur during the request
//             }
//           );
//           n++;
//       }
//     }, 1000);
//   }
// }
