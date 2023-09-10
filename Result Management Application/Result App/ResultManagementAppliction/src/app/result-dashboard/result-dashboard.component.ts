import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup} from '@angular/forms'
import { StudentModel } from './student-dash board.model';
import { ApiService } from '../shared/api.service';



@Component({
  selector: 'app-result-dashboard',
  templateUrl: './result-dashboard.component.html',
  styleUrls: ['./result-dashboard.component.css']
})
export class ResultDashboardComponent implements OnInit {
testdata:any
  formValue!:FormGroup;
  studentModelobj:StudentModel=new StudentModel();
  studentData !: any;
  showAdd!:boolean;
  showUpdate!:boolean;
  constructor(private formbuilder:FormBuilder,private api:ApiService) { }

  ngOnInit(): void {
    this.formValue=this.formbuilder.group({
      id : [''],
      name : [''],
      dateOfBirth : [''],
      score : ['']
    })
    this.getAllStudents();
  }
clickAddStudent(){
  this.formValue.reset();
  this.showAdd=true;
  this.showUpdate=false;
}
  postStudentDetails(){
    this.studentModelobj.id=this.formValue.value.id;
    this.studentModelobj.name=this.formValue.value.name;
    this.studentModelobj.dateOfBirth=this.formValue.value.dateOfBirth;
    this.studentModelobj.score=this.formValue.value.score;

    this.api.postStudent(this.studentModelobj).subscribe(res=>{console.log(res);
    alert("Student Added Successfully")
    let ref =document.getElementById('cancel')
    ref?.click(); 
    this.formValue.reset();
    this.getAllStudents();
    //alert(this.formValue.value.id);
  //this.testdata=this.api.getOne(this.formValue.value.id);
  console.log(this.testdata);

  },
    err=>{
      alert("Something went wrong");
    })
  }

  getAllStudents(){
    this.api.getStudent()
    .subscribe(res=>{
      this.studentData=res;
    })
  }
  deleteStudent(row:any){
    this.api.deleteStudent(row.id)
    .subscribe(res=>{
      alert("Student Deleted")
      this.getAllStudents();
    })
  }
  onEdit(row:any){
    this.showAdd=false;
  this.showUpdate=true;
    this.studentModelobj.id=row.id;
    this.formValue.controls['id'].setValue(row.id);
    this.formValue.controls['name'].setValue(row.name);
    this.formValue.controls['dateOfBirth'].setValue(row.dateOfBirth);
    this.formValue.controls['score'].setValue(row.score);
  }
  updateStudentDetails(){
    this.studentModelobj.id=this.formValue.value.id;
    this.studentModelobj.name=this.formValue.value.name;
    this.studentModelobj.dateOfBirth=this.formValue.value.dateOfBirth;
    this.studentModelobj.score=this.formValue.value.score;

    this.api.updateStudent(this.studentModelobj,this.studentModelobj.id)
    .subscribe(res=>{
      alert("Updated Successfully");
      let ref =document.getElementById('cancel')
    ref?.click(); 
    this.formValue.reset();
    this.getAllStudents();
    })
  }
}
