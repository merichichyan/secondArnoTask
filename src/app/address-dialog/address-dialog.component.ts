import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-address-dialog',
  templateUrl: './address-dialog.component.html',
  styleUrls: ['./address-dialog.component.css']
})
export class AddressDialogComponent implements OnInit {

  street: string
  suite: string
  city:string
  zipcode:string
  geo_lat:string
  geo_lng:string
  constructor(private u: UsersService) { }

  ngOnInit(): void {
    this.u.data.forEach((element: any) => {
      this.street = element.address.street
      this.suite = element.address.suite
      this.city = element.address.city
      this.zipcode = element.address.zipcode
      this.geo_lat = element.address.geo.lat
      this.geo_lng = element.address.geo.lng
    });
  }

}
