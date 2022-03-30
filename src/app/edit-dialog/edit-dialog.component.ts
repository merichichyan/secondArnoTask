import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { UserTableComponent } from '../user-table/user-table.component';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css']
})
export class EditDialogComponent implements OnInit {
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
      private u:UsersService,
      private dialogRef: MatDialogRef<UserTableComponent>) { }

  ngOnInit(): void {
  }

  edit(){
    this.u.add(this.user).subscribe({
      next: (data) => {
        this.dialogRef.close(data);
      },
      error: (e) => console.error(e.message),
    })
  }
}
