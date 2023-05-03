import { HttpClient } from '@angular/common/http';
import { SendMsgComponent } from './../send-msg/send-msg.component';
import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../service/subject.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-save-msg',
  templateUrl: './save-msg.component.html',
  styleUrls: ['./save-msg.component.scss']
})


export class SaveMsgComponent implements OnInit {

  subjects: any[] = [];
  SubjectFormGroup : FormGroup;

  constructor(private subService:SubjectService ,private fb:FormBuilder,private router:Router){

    this.SubjectFormGroup = this.fb.group({
      Id :[""],
      Subject :[""],
      Body:[""],
    })
  }


  ngOnInit(): void {

    this.getSubjects();

  }

  getSubjects(){
    this.subService.GetSubjects().subscribe(response=>{
      console.log(response);
      this.subjects = response;

     })

  }


  Onsubmit(){
    this.SubjectFormGroup.setValue({
      Id : 0,
      Subject: this.SubjectFormGroup.value.Subject,
      Body:this.SubjectFormGroup.value.Body
    })
    
    //console.log(this.SubjectFormGroup.value)

    this.subService.CreateSubject(this.SubjectFormGroup.value).subscribe(response => {
      console.log(response);
      this.getSubjects();
      this.SubjectFormGroup.setValue({
        Id:"",
        Subject:"",
        Body:""
      })
    })
  }

}

