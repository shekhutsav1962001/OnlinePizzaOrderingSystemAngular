import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-viewoneuser',
  templateUrl: './viewoneuser.component.html',
  styleUrls: ['./viewoneuser.component.css']
})
export class ViewoneuserComponent implements OnInit {
  userid: any;
  public user:User;
  public name: any;
  public email: any;
  public contact: any;
  constructor(private router: Router, private adminService: AdminService) { }

  ngOnInit(): void {
    this.check()
    this.userid = this.adminService.getoneOrder();
    this.view()
  }

  check() {
    this.adminService.check().subscribe(
      data => {
        console.log(data);
      },
      (error) => {

        if (error instanceof HttpErrorResponse) {

          this.router.navigate(['/login'])

        }
        console.log(error);
      }
    )
  }

  view() {
    if (this.userid == undefined) {
      this.router.navigate(['/login'])
    }
    else {
      this.adminService.getOneCartItemUser(this.userid).subscribe(
        data => {
          console.log(data);
          this.user=data['user']
          this.name = this.user['name']
          this.email = this.user['email']
          this.contact = this.user['contact']
        },
        error => {
          console.log(error);
        }
      )
    }
  }


}
