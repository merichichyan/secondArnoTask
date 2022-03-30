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
    name: '',
    username: '',
    company: { name: '', catchPhrase: '', bs: '' },
    address: {
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
  ) { }

  ngOnInit(): void { }

  add() {
    this.u.add(this.user).subscribe({
      next: (data) => {
        this.u.data.push(data)
        this.dialogRef.close();
      },
      error: (e) => console.error(e.message),
    })

  }
}
