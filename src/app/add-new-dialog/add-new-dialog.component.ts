import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { UserTableComponent } from '../user-table/user-table.component';
import { UsersService } from '../users.service';
import { FormGroup, FormControl } from '@angular/forms';

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
    website: '',
  };

  addUserForm = new FormGroup({
    name: new FormControl(''),
    username: new FormControl(''),
    company : new FormGroup({
      name: new FormControl(''),
      catchPhrase: new FormControl(''),
      bs: new FormControl(''),
    }),
    address : new FormGroup({
      street: new FormControl(''),
      suite: new FormControl(''),
      city: new FormControl(''),
      zipcode: new FormControl(''),
    }),
    geo : new FormGroup({
      lat: new FormControl(''),
      lng: new FormControl(''),
    }),
    phone: new FormControl(''),
    website: new FormControl(''),
  });

  constructor(
    private dialogRef: MatDialogRef<UserTableComponent>,
    private u: UsersService
  ) {}

  ngOnInit(): void {}

  add() {
    this.user = this.addUserForm.value;
    this.u.add(this.user).subscribe({
      next: (data) => {
        this.u.data.push(data);
        this.dialogRef.close();
      },
      error: (e) => console.error(e.message),
    });
  }
}
