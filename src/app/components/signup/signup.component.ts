import { Component, OnInit } from '@angular/core';
import { Signup } from 'src/app/signup';
import { Injectable } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
@Injectable({ providedIn: 'root' })

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupModel = new Signup('Firstname Lastname', 'zainab.o.afolabi@gmail.com',' Max Individual package.','09077926776');

  submitted = false;

  onSubmit() {  this.submitted=true;
    console.log(this.signupModel)
    this.dataService.signupEnroll(this.signupModel)
    .subscribe(
      data=>console.log('success!', data),
      error => console.log('error',error)
    )
 }
 
  newSignup() {
    this.signupModel = new Signup('','', '','');
  }
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
  }

}
