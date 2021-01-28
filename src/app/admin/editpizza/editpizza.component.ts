import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-editpizza',
  templateUrl: './editpizza.component.html',
  styleUrls: ['./editpizza.component.css']
})
export class EditpizzaComponent implements OnInit {
  msg: any = [];
  avail: boolean;
  onepizza: any;
  pizzaname: any;
  pizzasize: any;
  pizzaprice: any;
  pn: any;
  ps: any;
  pp: any;
  id: any;
  image;
  constructor(private http: HttpClient, private router: Router, private adminService: AdminService) { }

  ngOnInit(): void {
    this.check()
    this.onepizza = this.adminService.temp;

    this.pizzaname = this.onepizza.pizzaname;
    this.pizzasize = this.onepizza.pizzasize;
    this.pizzaprice = this.onepizza.pizzaprice;
    this.id = this.onepizza._id;
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

  onSubmit(f: NgForm) {
    if (!f.valid) {
      this.msg = "something went  wrong!!";
      this.avail = true;
      return;
    }
    const formData = new FormData();
    formData.append('id', this.id);

    if (f.controls.pizzaname.value) {
      // console.log("yes name");
      formData.append('pizzaname', f.controls.pizzaname.value);
      this.pn = f.controls.pizzaname.value;
    }
    else {
      // console.log("no name");
      formData.append('pizzaname', this.pizzaname);
      this.pn = this.pizzaname;
    }
    if (f.controls.pizzasize.value) {
      // console.log("yes size");
      formData.append('pizzasize', f.controls.pizzasize.value);
      this.ps = f.controls.pizzasize.value;
    }
    else {
      // console.log("no size");
      formData.append('pizzasize', this.pizzasize);
      this.ps = this.pizzasize;
    }

    if (f.controls.pizzaprice.value) {
      // console.log("yes price");
      formData.append('pizzaprice', f.controls.pizzaprice.value);
      this.pp = f.controls.pizzaprice.value;
    }
    else {
      // console.log("no price");
      formData.append('pizzaprice', this.pizzaprice);
      this.pp = this.pizzaprice;
    }


    if (f.controls.pizzapic.value) {
      // console.log("yes image");
      formData.append('file', this.image);

      // *************
      this.http.post<any>('http://localhost:3000/admin/editpizzawithimage', formData).subscribe(
        (res) => {
          this.adminService.avail = true;
          this.adminService.msg = "Successfully Edited a pizza!!!"
          this.router.navigate(['/admin']);
          console.log(res)
        }
        ,
        (error) =>{

          if(error instanceof HttpErrorResponse)
          {

              this.router.navigate(['/login'])

          }
          console.log(error);
        }
      );

    }
    else {

      this.http.get<any>('http://localhost:3000/admin/editpizzawithoutimage?id=' + this.id + '&pizzaname=' + this.pn + '&pizzasize=' + this.ps + '&pizzaprice=' + this.pp
      ).subscribe(
        (res) => {
          this.adminService.avail = true;
          this.adminService.msg = "Successfully Edited a pizza!!!"
          this.router.navigate(['/admin']);
          console.log(res)
        }
        ,
        (error) =>{

          if(error instanceof HttpErrorResponse)
          {
              this.router.navigate(['/login'])

          }
          console.log(error);
        }
      );
    }


  }


  selectImage(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.image = file;
    }
  }
}
