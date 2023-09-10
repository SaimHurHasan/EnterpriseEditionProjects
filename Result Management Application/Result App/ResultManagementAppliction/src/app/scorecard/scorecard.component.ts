import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { ActivatedRoute} from '@angular/router'
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-scorecard',
  templateUrl: './scorecard.component.html',
  styleUrls: ['./scorecard.component.css']
})
export class ScorecardComponent implements OnInit {

  
  // studentData !: any;
  // collections:any;
  id:any;
  data:any;
  constructor(private route:ActivatedRoute,private api:ApiService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.getOne()
    
  }

  getOne(){
      this.api.getOne(this.id).subscribe(data=>{
        this.data=data;
        console.log(data);
      })
  }
}


