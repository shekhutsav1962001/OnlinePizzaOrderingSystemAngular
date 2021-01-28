import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
// import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// export class AppComponent {
  // title = 'routing-demo';
  // ngOnInit()
  // {
  //   $(document).ready(function(){
  //     alert("ok janu");
  //   });
  // }
// }


export class AppComponent implements OnInit{
  title = 'routing-demo';
  ngOnInit()
  {
    // $(document).ready(function(){
    //   alert("ok janu");
    // });
    // AOS.init();
  }
}