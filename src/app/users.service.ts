import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  data: any = [];
  constructor() {}

  getData() {
    return fetch('https://jsonplaceholder.typicode.com/users');
  }

  addUser() {
    let model = {
      name: 'Armen',
      username: 'username',
      email: 'armen@gmail.com',
      company: {
        name: 'Hoeger LLC',
        catchPhrase: 'Centralized empowering task-force',
        bs: 'target end-to-end models',
      },
      address: {
        street:'Kattie Turnpike',
        suite: 'Suite 198',
        city: 'Lebsackbury',
        zipcode: '31428-2261',
        geo_lat: '-38.2386',
        geo_lng: '57.2232'
      },
      phone: '123',
      website: 'www.ww.com',
    };
    return fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      body: JSON.stringify(model),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  delete(index: number) {
    this.data.splice(index, 1);
  }
}
