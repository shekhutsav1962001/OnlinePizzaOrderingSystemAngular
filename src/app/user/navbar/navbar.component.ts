import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  notycnt:any;
  constructor(private router: Router,private  cartService:CartService) { }

  ngOnInit(): void {
  
  }

  logoutuser()
  {
    console.log("yes in  user logout");
    localStorage.removeItem('token')
    localStorage.removeItem('userid')
    localStorage.removeItem('N1@#I2@#M3@#D4@#A6');
    this.router.navigate(['/']);
  }
}
