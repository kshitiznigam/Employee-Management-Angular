import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgModel } from '@angular/forms';
@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.scss']
})
export class UpdateEmployeeComponent {
  id: any;
  data: any;
  name : String = "";
  email : String = "";
  empId : String = "";
  phonno : String = "";
  department : String = "";
  type : String = "";



  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    
//     const url = `http://localhost:8080/employee/dashboard/${this.id}`;
//     this.http.get(url).subscribe((datas: any) => {
      
//       this.data = datas;
      
//     });
//   }

//   update(){
//     // this.data.name = this.name;
//     // this.data.email_Id = this.email;
//     // this.data.empId = this.empId;
//     // this.data.phno = this.phonno;
//     // this.data.department = this.department
//     const s ={
//       name : this.name,
//       email : this.email,
//       empId : this.empId,
//       phonno : this.phonno,
//       department : this.department,
//       type : this.type
//     }
// console.log("bugluh;oih"+this.data)
//     // console.log(g);
//     const url = `http://localhost:8080/employee/update/${this.data.empId}`;
    
//     // console.log(this.data.id)
//     this.http.put(`${url}`,this.data).subscribe( (data) =>{
//       console.log(this.data);
//     }

//     , error => console.log(error));

  }
}
