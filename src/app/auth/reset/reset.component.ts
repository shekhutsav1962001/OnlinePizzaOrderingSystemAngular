import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {
  msg : any =[];
  avail:boolean;
  arr:any[];
  checkmail:boolean;
  constructor(private router:Router, private authService:AuthService) { }

  ngOnInit(): void {
    this.checkmail=false;
    this.readUser()
  }
  readUser()
  {
    this.authService.readUser().subscribe(
      data=>{
        this.arr = data['msg'];
      },
      error=>{
        console.log(error);
      }
    )
  }

  onSubmit(f:NgForm)
  {
    for (var val of this.arr)
    {
      var a = val['email'];
      var b = f.controls.email.value;
      if(a==b)
      {
        this.checkmail=true;
      }
    }
    if(this.checkmail==false)
    {
      this.msg = "User does not exist with this mail!!";
      this.avail=true;
      return;
    }


    this.authService.reset(JSON.stringify(f.value))
    .subscribe(
      data=> {console.log(data); this.router.navigate(['/reset-password']);},
      error=>{console.error(error);this.msg = error;}
    )
  }

}
