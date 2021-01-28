import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import * as AOS from 'aos';
@Component({
  selector: 'app-aa',
  templateUrl: './aa.component.html',
  styleUrls: ['./aa.component.css']
})
export class AaComponent implements OnInit {
  image;
  socket:any;
  constructor(private http: HttpClient,private toastr: ToastrService  ) { }

  ngOnInit(): void {
    AOS.init()

  }

  selectImage(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      if(file)
      {
      this.image = file;
      }
      else{
        console.log("not file");
      }
    }
  }

  onSubmit(){
    const formData = new FormData();
    formData.append('file', this.image);
    if(this.image)
    {
    console.log(this.image);
    }
    else{
      console.log("errrrrrrrrrr");
    }
  }

  c()
  {
    this.toastr.success('Hello world!', '',{
      timeOut: 2000,
      closeButton:true
    });
  }

  check()
  {
    console.log("in check");
    console.log(!!localStorage.getItem('token') && (localStorage.getItem('N1@#I2@#M3@#D4@#A6')=="U@$SVBs6Hh5sGggbAbf50"));

  }

  refresh(): void {
    window.location.reload();
}
}
