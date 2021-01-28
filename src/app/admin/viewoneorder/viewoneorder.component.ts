import { HttpErrorResponse } from '@angular/common/http';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-viewoneorder',
  templateUrl: './viewoneorder.component.html',
  styleUrls: ['./viewoneorder.component.css']
})
export class ViewoneorderComponent implements OnInit {

  constructor(private router: Router, private adminService: AdminService) { }
  oneorderid:any;
  arr: any[];
  pizzas: any[];
  total:any;


  ngOnInit(): void {
    this.check()
    this.oneorderid =this.adminService.getoneOrder();
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
  view()
  {
    if(this.oneorderid==undefined)
    {
      this.router.navigate(['/login'])
    }
    else
    {
    this.adminService.getOneCartItem(this.oneorderid).subscribe(
      data => {

        this.arr = data[0];
        this.total=this.arr['total'];
        this.pizzas=this.arr['pizza']
      },
      error => {
        console.log(error);
      }
    )
    }
  }
}
