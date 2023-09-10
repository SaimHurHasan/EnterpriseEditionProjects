import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginTeacherForm!:FormGroup
  constructor(private formBuilder:FormBuilder,private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.loginTeacherForm=this.formBuilder.group({
      email:['',Validators.required],
      password:['',Validators.required]
    })
  }
  loginTeacher(){
this.http.get<any>("http://localhost:3000/signupStudents")
.subscribe(res=>{
  const TeacherUser=res.find((a:any)=>{
    return a.email===this.loginTeacherForm.value.email && a.password===this.loginTeacherForm.value.password
  });
if(TeacherUser){
  alert("Login Success!!");
  this.loginTeacherForm.reset();
  this.router.navigate(['dashboard'])
}else{
  alert("user not found!!");
}
},err=>{
  alert("Something went wrong!!");
})
  }
}
