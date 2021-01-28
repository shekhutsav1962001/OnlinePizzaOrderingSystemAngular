import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-reset-password-done',
  templateUrl: './reset-password-done.component.html',
  styleUrls: ['./reset-password-done.component.css']
})
export class ResetPasswordDoneComponent implements OnInit {
  msg: any = [];
  avail: boolean;
  arr: any[];
  otparr: any[];
  checkmail: boolean;
  otpflag: boolean;
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.checkmail = false;
    this.otpflag = false;
    this.readUser()
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

    this.authService.getOtp().subscribe(
      data => {
        this.otparr = data['msg'];
        // console.log("otparr");
        // console.log(this.otparr);
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
        this.checkmail = true;
      }
    }
    if (this.checkmail == false) {
      this.msg = "User does not exist with this mail!!";
      this.avail = true;
      return;
    }


    if (!f.valid) {
      this.msg = "Invalid Form Fields";
      this.avail = true;
      return;
    }

    for (var val of this.otparr) {
      var a = val['email'];
      var b = f.controls.email.value;
      if (a == b) {
        var otpfrombackend = val['otp'];
        var otpfromfrontend = f.controls.otp.value;
        if (otpfrombackend == otpfromfrontend) {
          this.otpflag = true;
        }
      }
    }
    if (this.otpflag == false) {
      this.msg = "Otp doesn't match";
      this.avail = true;
      return;
    }

    if (f.controls.p1.value != f.controls.p2.value) {
      this.msg = "Password   doesn't match";
      this.avail = true;
      return;
    }
    this.authService.resetpassworddone(JSON.stringify(f.value))
      .subscribe(
        data => { console.log(data);
          this.authService.msg = "successfully password-reset done!!";
          this.router.navigate(['/login']); },
        error => { console.error(error); this.msg = error; }
      )
  }




}
