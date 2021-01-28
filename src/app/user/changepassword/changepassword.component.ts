import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {
  msg: any = [];
  avail: boolean;
  arr: any[];
  isValid: boolean = false;
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.readUser()
    // first we logout current user
    localStorage.removeItem('token')
    localStorage.removeItem('userid')
    localStorage.removeItem('N1@#I2@#M3@#D4@#A6');
  }



  readUser() {
    this.authService.readUser().subscribe(
      data => {
        this.arr = data['msg'];
      },
      error => {
        console.log(error);
      }
    )
  }
  onSubmit(f: NgForm) {

    for (var val of this.arr) {
      var a = val['email'];
      var b = f.controls.email.value;
      if (a == b) {
        // console.log("yes same");
        this.isValid = true;
      }
    }
    if (this.isValid) {
      console.log("email exist");
    }
    else {
      // console.log("email does not exist");
      this.msg = "Email does not exist!!";
      this.avail = true;
      return;
    }


    if (f.controls.p1.value != f.controls.p2.value) {
      this.msg = "Password   doesn't match";
      this.avail = true;
      return;
    }

    this.authService.changepassword(JSON.stringify(f.value))
      .subscribe(
        data => {
          // console.log(data);
          if(data['error'])
          {
            console.log("in if err");
            console.log(data['error']);
            this.msg = data['error']
            this.avail=true;
            return;
          }
          else
          {
            this.authService.msg="successfully changed password!!";
            this.router.navigate(['/login']);
          }
        },
        error => { console.error(error); this.msg = error; }
      )
  }
}
