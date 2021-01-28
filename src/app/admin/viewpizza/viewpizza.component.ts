import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { Pizza } from '../../pizza'
@Component({
  selector: 'app-viewpizza',
  templateUrl: './viewpizza.component.html',
  styleUrls: ['./viewpizza.component.css']
})
export class ViewpizzaComponent implements OnInit {
  public pizzas: Pizza[];
  avail: boolean;
  arr: any[];

  constructor(private router: Router, private adminService: AdminService) { }

  ngOnInit(): void {
    this.check()
    this.readPizza()
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

  readPizza() {
    this.adminService.getAllPizza().subscribe(
      data => {
        this.arr = data['msg'];
        this.pizzas = data['msg'];

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

  deletepizza(pizza) {


    var pizzaid = pizza._id;
    this.adminService.deletepizza(pizzaid).subscribe(
      data => {
        // console.log(data);
        this.adminService.avail = true;
        this.adminService.msg = "Successfully Deleted a Pizza!!!";
        this.router.navigate(['/admin']);
      },
      (error) => {

        if (error instanceof HttpErrorResponse) {

            this.router.navigate(['/login'])

        }
        console.log(error);
      }
    )
  }
  editpizza(pizza) {
    this.adminService.temp = pizza;
    this.router.navigate(['/admin/editpizza']);
  }
}
