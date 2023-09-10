import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
   
  public signupTeacherForm!:FormGroup;
  constructor(private formBuilder: FormBuilder,private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.signupTeacherForm=this.formBuilder.group({
      fullName:['',Validators.required],
      rollNo:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required] 
    })
  }
  signUp(){
     this.http.post<any>("http://localhost:3000/signupStudents",this.signupTeacherForm.value)
     .subscribe({ next:(res)=>{
      alert("Signup Successfully");
       this.signupTeacherForm.reset();
       this.router.navigate(['login']);
     },error:error=>{
         alert("Something went wrong");
     }
    })
}}
