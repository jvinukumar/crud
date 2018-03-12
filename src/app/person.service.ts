import { Injectable } from '@angular/core';
import { person } from './person';

@Injectable()
export class PersonService {
  data:person[]=[];

  constructor() { }

  addPerson(persons:person) {

    this.data.push(persons);
  }
  
  getDetails(){

    return this.data;
  }

  findUser(email: String): person {
    for(let i=0;i<this.data.length;i++){
      if(this.data[i].email === email){
        return this.data[i];
      } else {
        return null;
      }
    }
  }

//   findUser(email: String): person {
//     for(let i=0;i<this.data.length;i++){
//       if(this.data[i].email === email){
//         return this.data[i];
//       } else {
//         return null;
//       }
//     }
//   }
// // 
}
