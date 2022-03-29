import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddressDialogComponent } from '../address-dialog/address-dialog.component';
import { CompanyDialogComponent } from '../company-dialog/company-dialog.component';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {

  displayedColumns: string[] = ['select','ID', 'name', 'username', 'company', 'address', 'phone', 'website', 'action'];
  all: boolean = false

  constructor(public u: UsersService,
    public dialog: MatDialog) { 
    }

  ngOnInit(): void {

  }

  selectAll() {
    this.u.data.forEach((d:any) => {
      d.selected = this.all
    })
  }

  selectOne(selected: boolean) {
    if (selected) {
      let all = true
      this.u.data.forEach((d:any) => {
        if (!d.selected) {
          all = false
        }
      })
      this.all = all
    } else {
      this.all = false
    }
  }

  openAddressDialog() {
    this.dialog.open(AddressDialogComponent)
  }

  openCompanyDialog() {
    this.dialog.open(CompanyDialogComponent)
  }

}
