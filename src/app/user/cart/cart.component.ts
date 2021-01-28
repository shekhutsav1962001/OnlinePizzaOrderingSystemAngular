import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  arr: any[];
  pizzas: any[];
  total:any;
  emptychechk:boolean;

  constructor(private router: Router, private authService: AuthService,private cartService:CartService) { }

  ngOnInit(): void {
    this.check()
    // this.getItem()
    this.empty()
  }

  check() {
    this.authService.check().subscribe(
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


  empty()
  {
    this.cartService.EmptyCheck().subscribe(
      data => {
        // console.log(data);
        if(data['msg']=="yes empty cart")
        {
          // console.log("empty cart");
          this.router.navigate(['/empty-cart'])
          return;
        }
        else
        {
          this.getItem();
        }
      },
      (error) => {
        console.log(error);
      }
    )
  }

  getItem()
  {
    this.authService.getCartItem().subscribe(
      data => {

        this.arr = data[0];

        this.total=this.arr['total'];

        this.pizzas=this.arr['pizza']

        if(this.pizzas.length==0)
        {
          this.router.navigate(['/empty-cart'])
          return;
        }

      },
      error => {
        console.log(error);
      }
    )
  }


  deletefromcart(pizza)
  {

    this.cartService.deletePizza(pizza).subscribe(
      data => {
        // console.log(data);
        if(data['msg']=="pizza deleted from the cart")
        {
          // console.log("hello");
          this.authService.msg="pizza deleted from the cart";
          this.authService.avail=true;
          this.router.navigate(['/userhome'])
        }
      },
      error => {

        console.log(error);
      }
    )
  }
  checkout()
  {

    this.cartService.deletecart().subscribe(
      data => {

        if(data['msg']=="order placed")
        {

          this.authService.msg="sucessfully order placed!!!!";
          this.authService.avail=true;
          this.router.navigate(['/userhome'])
        }
      },
      error => {
        console.log(error);
      }
    )
  }
}
