import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthService) { }


  canActivate(): boolean {
    if (this.authService.loggedIn()) {
      if (localStorage.getItem('N1@#I2@#M3@#D4@#A6') == "nU@$SVBs6Hh5sGggbAbf50") {
        return true;
      }
      else {
        localStorage.removeItem('token');
        localStorage.removeItem('userid')
        localStorage.removeItem('N1@#I2@#M3@#D4@#A6');
        this.router.navigate(['/login'])
        return false;
      }
    }
    else {
      localStorage.removeItem('token');
      localStorage.removeItem('userid')
      localStorage.removeItem('N1@#I2@#M3@#D4@#A6');
      this.router.navigate(['/login'])
      return false;
    }
  }
}
