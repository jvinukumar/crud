import { Component, OnInit } from '@angular/core';
import { person } from '../person';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  data:person[]=[];

  constructor(private personService:PersonService) { }

  ngOnInit() {
  }

  Onsubmit(){
console.log(this.data)

this.personService.addPerson(new person(
  this.data['firstname'],
  this.data['lastname'],
  this.data['middlename'],
  this.data['email'],
  this.data['password']
      
))

  }

}
