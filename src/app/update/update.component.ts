import { Component, OnInit } from '@angular/core';
import { PersonService } from '../person.service';
import { person } from '../person';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  person: person;
  foundUser: boolean;
  dataFoundClassInfo = "";
  dataMessage = '';

  constructor(private personService: PersonService) { }

  ngOnInit() {
  }

  findUser(email: HTMLInputElement) {
    this.person = this.personService.findUser(email.value);
    console.log(this.person);
    if(this.person!=null){
      console.log('found');
       
      this.dataMessage = 'User found';
      this.dataFoundClassInfo = "alert alert-success";
    } else {
      this.foundUser = true;
      console.log('not found');
      this.dataMessage = 'User not found';
      this.dataFoundClassInfo = "alert alert-danger";
    }
  }

  // findUser(email: any) {
  //   this.Person []= this.personService.findUser(email);

  // }

//   getUser(persons:person){
//     //this.person.push(persons);
//     console.log(this.person);
// return this.person;


  }
