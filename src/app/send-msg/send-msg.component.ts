import { EmailService } from "../service/EmailService";
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SubjectService } from '../service/subject.service';



@Component({
  selector: 'app-send-msg',
  templateUrl: './send-msg.component.html',
  styleUrls: ['./send-msg.component.scss']
})

export class SendMsgComponent implements OnInit {

  id: string = '';
  subject: any = {};
  mailObject: any = {};
  subjects: any[] = [];
  EmailFormGroup!: FormGroup;


  // Create an object with the required properties
  emailData = {
    to: '',
    subject: '',
    body: '',
    attach: []
  };


  emailPattern = "(([a-zA-Z0-9_\\-\\.]+)@((\\[[0-9]{1,3}\\.[0-9]{1,3}\.[0-9]{1,3}\\.)|(([a-zA-Z0-9\\-]+\\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\\]?)(\s*,\\s*|\\s*$))*";



  constructor(
    private fb: FormBuilder,
    private subService: SubjectService,
    private _activeRoute: ActivatedRoute,
    private emailService: EmailService,
  ) {
    //hold id from url
    this.id = this._activeRoute.snapshot.params['id'];

    this.EmailFormGroup = this.fb.group({
      //Id :[''],
      ToEmail: ['', [Validators.pattern(this.emailPattern)]],
      //Subject:[''],
      Body: [''],
      //Attachments:['']
    });



  }




  public hasError = (controlName: string, errorName: string) => {
    return this.EmailFormGroup.controls[controlName].hasError(errorName);
  }


  ngOnInit(): void {


    //subscripe to find id and select body for display in html
    this.subService.GetById(this.id).subscribe(response => {
      this.subject = response;
    })
  }






  Submit() {

    this.EmailFormGroup.value.Body = this.subject.body;

    console.log("new  subject.body is here  :   " + this.EmailFormGroup.value.Body);

    console.log("new  email is here  :   " + this.EmailFormGroup.value.ToEmail);


    this.emailService.sendEmail(this.emailData).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.error(error);
      });

    this.EmailFormGroup.setValue({
      ToEmail: "",
      Body: ""

    });

  }

}

