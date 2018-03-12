import { Component, OnInit } from '@angular/core';
import { PersonService } from '../person.service';
import { person } from '../person';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {
  data:person[]=[];

  constructor(private personService:PersonService) { }

  ngOnInit() {
    this.data=this.personService.getDetails();
  }
Details(){
  console.log(this.data)
}
}
