import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/user';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {
  public user: User;
  public id:any;

  public name:any;
  public email:any;
  public contact:any;
  constructor(private router: Router, private toastr: ToastrService,private authService: AuthService) { }

  ngOnInit(): void {

    if(this.authService.msg=="profile updated successfully!!")
    {
      this.toastr.success('successfully updated profile!!', '', {
        timeOut: 2000,
        closeButton: true
      });
    }
    this.check()
    this.getOneuser()
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

  getOneuser()
  {
    this.id = localStorage.getItem('userid')

    this.authService.Oneuser(this.id).subscribe(
      data => {
        // console.log(data);
        this.user=data['user']
        this.name = this.user['name']
        this.email = this.user['email']
        this.contact = this.user['contact']
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
