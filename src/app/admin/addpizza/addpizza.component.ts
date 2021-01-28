import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-addpizza',
  templateUrl: './addpizza.component.html',
  styleUrls: ['./addpizza.component.css']
})
export class AddpizzaComponent implements OnInit {
  msg: any = [];
  avail: boolean;
  onepizza: any;
  image;
  constructor(private http: HttpClient, private router: Router, private adminService: AdminService) { }

  ngOnInit(): void {
    this.check()
    this.onepizza = this.adminService.temp;
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


  onSubmit(f: NgForm) {
    if (!f.valid) {
      this.msg = "something went  wrong!!";
      this.avail = true;
      return;
    }
    const formData = new FormData();
    formData.append('file', this.image);
    formData.append('pizzaname', f.controls.pizzaname.value);
    formData.append('pizzasize', f.controls.pizzasize.value);
    formData.append('pizzaprice', f.controls.pizzaprice.value);
    this.http.post<any>('http://localhost:3000/admin/addpizza', formData).subscribe(
      (res) => {
        this.adminService.avail = true;
        this.adminService.msg = "Successfully Added a pizza!!!"
        this.router.navigate(['/admin']);
        // console.log(res)
      }
      ,
      (error) => {

        if (error instanceof HttpErrorResponse) {

            this.router.navigate(['/login'])

        }
        console.log(error);
      }
    );

  }
  selectImage(event) {
    console.log("image selected");
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.image = file;
    }
  }
}
