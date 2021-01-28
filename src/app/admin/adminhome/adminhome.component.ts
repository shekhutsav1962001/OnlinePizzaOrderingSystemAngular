import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {
  msg : any =[];
  avail:boolean;
  orders : any =[];
  constructor(private adminService: AdminService,private router: Router) { }

  ngOnInit(): void {
    this.check()
    this.Order()
    if(this.adminService.avail)
    {
      this.avail=true;
      this.msg = this.adminService.msg;
    }
    this.change();

  }
  change()
  {
    // console.log("aa");
    this.adminService.avail=false;
    this.adminService.msg="";
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


  Order()
  {
    this.adminService.getorder().subscribe(
      data => {
        this.orders=data['msg'];
      },
      (error) => {
        console.log(error);
      }
    )
  }


  delete(order)
  {
    this.adminService.deleteorder(order._id).subscribe(
      data => {

        if(data['msg']=="yes deleted order by admin")
        {
          alert("successfully deleted order")
          window.location.reload();
        }
      },
      (error) => {
        console.log(error);
      }
    )
  }

  seeorder(order)
  {
    this.adminService.setOrder(order._id)
    this.router.navigate(['admin/viewoneorder'])
  }

  viewuser(userid)
  {
    this.adminService.setOrder(userid)
    this.router.navigate(['admin/viewoneuser'])
  }
}
