import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ind',
  templateUrl: './ind.component.html',
  styleUrls: ['./ind.component.css']
})
export class IndComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  logoutadmin()
  {
    console.log("yes in admin logout");
    localStorage.removeItem('token');
    localStorage.removeItem('userid')
    localStorage.removeItem('N1@#I2@#M3@#D4@#A6');
    this.router.navigate(['/']);
  }
}
