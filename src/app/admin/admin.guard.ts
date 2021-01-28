import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) { }


  canActivate(): boolean {
    if (this.authService.loggedIn()) {
      if (localStorage.getItem('N1@#I2@#M3@#D4@#A6') == "yU@$SVBs6Hh5sGggbAbf50") {
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
