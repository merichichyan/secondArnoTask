import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  data: any=[]
  constructor() { 
    this.getData()
  }

  getData() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => this.data = json)
  }

  delete(index:number){
    this.data.splice(index, 1);
  }
}
