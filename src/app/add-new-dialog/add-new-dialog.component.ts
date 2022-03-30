import { JsonpClientBackend } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { UserTableComponent } from '../user-table/user-table.component';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-add-new-dialog',
  templateUrl: './add-new-dialog.component.html',
  styleUrls: ['./add-new-dialog.component.css'],
})
export class AddNewDialogComponent implements OnInit {
  user = {
    id: '',
  name:'',
  username: '',
  company : { name: '', catchPhrase: '', bs: '' },
  address : {
    street: '',
    suite: '',
    city: '',
    zipcode: '',
    geo: { lat: '', lng: '' },
  },
  phone: '',
  website: ''
  }
  constructor(
    private dialogRef: MatDialogRef<UserTableComponent>,
    private u: UsersService
  ) {}

  ngOnInit(): void {}

  add() {
    this.u
      .addUser()
      .then((res) => res.json())
      .then((data) => {
        this.user = data
        const oldData = this.u.data;
        this.u.data = [];
        this.u.data = oldData;
        this.u.data.push(data);
      })
      .catch((err) => console.log(err));
    this.dialogRef.close(this.user);
  }
  close() {
    this.dialogRef.close();
  }
}
