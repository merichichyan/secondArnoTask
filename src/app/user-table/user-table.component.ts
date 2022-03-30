import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { AddNewDialogComponent } from '../add-new-dialog/add-new-dialog.component';
import { AddressDialogComponent } from '../address-dialog/address-dialog.component';
import { CompanyDialogComponent } from '../company-dialog/company-dialog.component';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css'],
})
export class UserTableComponent implements OnInit {
  displayedColumns: string[] = [
    'position',
    'select',
    'name',
    'username',
    'ID',
    'email',
    'company',
    'address',
    'phone',
    'website',
    'action',
  ];
  dataSource = new MatTableDataSource<any>([]);
  all: boolean = false;

  constructor(public u: UsersService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.u
      .getData()
      .then((res) => res.json())
      .then((res) => {
        this.u.data = res;
        this.dataSource.data = this.u.data
      })
      .catch((err) => console.log(err));
  }

  selectAll() {
    this.u.data.forEach((d: any) => {
      d.selected = this.all;
    });
  }

  selectOne(selected: boolean) {
    if (selected) {
      let all = true;
      this.u.data.forEach((d: any) => {
        if (!d.selected) {
          all = false;
        }
      });
      this.all = all;
    } else {
      this.all = false;
    }
  }

  openAddressDialog() {
    this.dialog.open(AddressDialogComponent);
  }

  openCompanyDialog() {
    this.dialog.open(CompanyDialogComponent);
  }

  openDeleteDialog(index: number) {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '250px',
      data: [],
    });

    dialogRef.afterClosed().subscribe((deleted) => {
      if (deleted) this.u.delete(index);
      this.dataSource.data = this.u.data;
    });
  }

  deleteSelected() {
    this.u.data = this.u.data.filter((d: any) => !d.selected);
    this.dataSource.data = this.u.data;
  }

  openAddNewDialog() {
    const dialogRef = this.dialog.open(AddNewDialogComponent, {
      width: '1050px',
      data: [],
    });


    dialogRef.afterClosed().subscribe((user) => {
      console.log(user)
      this.dataSource.data = this.u.data
    })
  }
}
