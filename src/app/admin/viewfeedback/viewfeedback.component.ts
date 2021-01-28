import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-viewfeedback',
  templateUrl: './viewfeedback.component.html',
  styleUrls: ['./viewfeedback.component.css']
})
export class ViewfeedbackComponent implements OnInit {
  arr: any[];
  constructor(private adminService: AdminService, private router: Router) { }

  ngOnInit(): void {
    this.check()
    this.getFeed()
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
    // console.log();
  }


  getFeed() {
    this.adminService.getAllFeedback().subscribe(
      data => {
        console.log(data);
        this.arr=data['msg'];
      },
      (error) => {

        if (error instanceof HttpErrorResponse) {

            this.router.navigate(['/login'])

        }
        console.log(error);
      }
    )
  }

  delete(a)
  {
    var id = a._id;


    this.adminService.deletefeedback(id).subscribe(
      data => {
        // console.log(data);
        this.adminService.avail = true;
        this.adminService.msg = "Successfully Deleted a feedback!!!";
        this.router.navigate(['/admin']);
      },
      (error) => {
        // console.log("yoyo err");
        if (error instanceof HttpErrorResponse) {

            this.router.navigate(['/login'])

        }
        console.log(error);
      }
    )
  }
}
