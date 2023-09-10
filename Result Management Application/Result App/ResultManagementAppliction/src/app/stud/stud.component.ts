import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup ,Validators} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-stud',
  templateUrl: './stud.component.html',
  styleUrls: ['./stud.component.css']
})
export class StudComponent implements OnInit {
   
  public loginStudForm!:FormGroup
  constructor(private formBuilder:FormBuilder,private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.loginStudForm=this.formBuilder.group({
      id:['',Validators.required],
      name:['',Validators.required]
    })
  }
  studLogin(){
    this.http.get<any>("http://localhost:3000/posts")
    .subscribe(res=>{
      const StudentUser=res.find((a:any)=>{
        
        return a.id===this.loginStudForm.value.id && a.name===this.loginStudForm.value.name
      });
    if(StudentUser){
      alert("Login Success!!");
    
      // this.router.navigate(['/scorecard/'+this.loginStudForm.value.id]);
      //this.router.navigate(['/front']);

      this.router.navigate(['/scorecard/'+this.loginStudForm.value.id]);
      this.loginStudForm.reset();
      
    }
  
    else{
      alert("user not found!!");
      this.loginStudForm.reset();
     
    }
    },err=>{
      alert("Something went wrong!!");
    })
      }
    }
    
