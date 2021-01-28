import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { User } from 'src/app/user';
@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {
  public user: User;
  public id: any;
  public name: any;
  public email: any;
  public contact: any;
  public new:any;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.new = true;
    this.check()
    this.getOneuser()
  }
  getOneuser() {
    this.id = localStorage.getItem('userid')
    this.authService.Oneuser(this.id).subscribe(
      data => {
        this.user = data['user']
        this.name = this.user['name']
        this.email = this.user['email']
        this.contact = this.user['contact']
        this.id = this.user['_id']
      },
      (error) => {

        if (error instanceof HttpErrorResponse) {

            this.router.navigate(['/login'])

        }
        console.log(error);
      }
    )
  }

  check() {
    this.authService.check().subscribe(
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
  enable()
  {
    this.new =false;
  }
  change() {
    localStorage.setItem('userid',this.email);

    this.authService.editprofile(this.id,this.name,this.email,this.contact).subscribe(
      data => {
        console.log(data);
        this.authService.msg="profile updated successfully!!"
        this.router.navigate(['/myprofile'])
      },
      (error) => {

        if (error instanceof HttpErrorResponse) {

            this.router.navigate(['/login'])

        }
        console.log(error);
      }
    )
  }
}
