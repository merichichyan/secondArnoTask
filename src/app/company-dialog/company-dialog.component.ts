import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-company-dialog',
  templateUrl: './company-dialog.component.html',
  styleUrls: ['./company-dialog.component.css']
})
export class CompanyDialogComponent implements OnInit {

  name:string
  catchPhrase:string
  bs:string
  constructor(private u:UsersService) { }

  ngOnInit(): void {
    this.u.data.forEach((element:any) => {
        this.name=element.company.name
        this.catchPhrase=element.company.catchPhrase
        this.bs=element.company.bs
    });
  }

}
