import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { UserTableComponent } from '../user-table/user-table.component';
import { UsersService } from '../users.service';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css'],
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
    website: '',
  };

  editUserForm = new FormGroup({
    name: new FormControl(''),
    username: new FormControl(''),
    company: new FormGroup({
      name: new FormControl(''),
      catchPhrase: new FormControl(''),
      bs: new FormControl(''),
    }),
    address: new FormGroup({
      street: new FormControl(''),
      suite: new FormControl(''),
      city: new FormControl(''),
      zipcode: new FormControl(''),
    }),
    geo: new FormGroup({
      lat: new FormControl(''),
      lng: new FormControl(''),
    }),
    phone: new FormControl(''),
    website: new FormControl(''),
  });

  constructor(
    private u: UsersService,
    private dialogRef: MatDialogRef<UserTableComponent>,
  ) {

  }

  ngOnInit(): void {}

  edit() {
    this.user = this.editUserForm.value;
    this.u.update(this.user).subscribe({
      next: (data) => {
        this.dialogRef.close(data);
      },
      error: (e) => console.error(e.message),
    });
  }
}
