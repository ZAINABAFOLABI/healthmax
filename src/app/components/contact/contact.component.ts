import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/contact';
import { DataService } from 'src/app/services/data.service';
import { Injectable } from '@angular/core';
@Injectable({ providedIn: 'root' })

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  model = new Contact('Firstname Lastname', 'zainab.o.afolabi@gmail.com','I would like to inquire about Max Individual package.','09077926776');

  submitted = false;

  onSubmit() {  this.submitted=true;
    console.log(this.model)
    this.dataService.enroll(this.model)
    .subscribe(
      data=>console.log('success!', data),
      error => console.log('error',error)
    )
 }
 
  newContact() {
    this.model = new Contact('','', '','');
  }
 
 
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
  }

}
