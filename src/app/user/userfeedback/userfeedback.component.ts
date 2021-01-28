import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-userfeedback',
  templateUrl: './userfeedback.component.html',
  styleUrls: ['./userfeedback.component.css']
})
export class UserfeedbackComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.check()
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
    // console.log();
  }

  onSubmit(f: NgForm) {


    this.authService.sendfeedback(JSON.stringify(f.value))
      .subscribe(
        data => {
          console.log(data);
          if(data['msg']=="success")
          {
            this.authService.msg="sucessfully sended your feedback";
            this.authService.avail=true;
            this.router.navigate(['/userhome']);
          }
          else
          {
            this.authService.msg="something went wrong while submitting your feedback";
            this.authService.avail=true;
            this.router.navigate(['/userhome']);
          }

        },
        error => { console.error(error); }
      )
  }

}
