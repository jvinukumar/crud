import { Component, OnInit } from '@angular/core';
import { person } from '../person';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  data:person

  constructor(private personService: PersonService) { }

  findUser(email: any) {


  }





  ngOnInit() {
  }

}
