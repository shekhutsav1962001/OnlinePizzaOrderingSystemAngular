import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ErrComponent } from './err/err.component';
import { HeaderComponent } from './ind/header/header.component';
import { MainComponent } from './ind/main/main.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { ResetComponent } from './auth/reset/reset.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { ResetPasswordDoneComponent } from './auth/reset-password-done/reset-password-done.component';
import { ViewuserComponent } from './admin/viewuser/viewuser.component';
import { AaComponent } from './aa/aa.component';
import { AddpizzaComponent } from './admin/addpizza/addpizza.component';
import { ViewpizzaComponent } from './admin/viewpizza/viewpizza.component';
import { EditpizzaComponent } from './admin/editpizza/editpizza.component';
import { UserhomeComponent } from './user/userhome/userhome.component';
import { AuthGuard } from './auth/auth.guard';
import { AdminGuard } from './admin/admin.guard';
import { CartComponent } from './user/cart/cart.component';
import { MyprofileComponent } from './user/myprofile/myprofile.component';
import { EditprofileComponent } from './user/editprofile/editprofile.component';

import { ChangepasswordComponent } from './user/changepassword/changepassword.component';
import { UserofferComponent } from './user/useroffer/useroffer.component';
import { UserfeedbackComponent } from './user/userfeedback/userfeedback.component';
import { ViewfeedbackComponent } from './admin/viewfeedback/viewfeedback.component';
import { EmptycartComponent } from './user/emptycart/emptycart.component';
import { ViewoneorderComponent } from './admin/viewoneorder/viewoneorder.component';
import { ViewoneuserComponent } from './admin/viewoneuser/viewoneuser.component';


const routes: Routes = [
  { path: '', component: MainComponent },

  { path: 'admin', component: AdminhomeComponent, canActivate: [AdminGuard] },
  { path: 'admin/viewoneorder', component: ViewoneorderComponent, canActivate: [AdminGuard] },
  { path: 'admin/addpizza', component: AddpizzaComponent, canActivate: [AdminGuard] },
  { path: 'admin/viewfeedback', component: ViewfeedbackComponent, canActivate: [AdminGuard] },
  { path: 'admin/viewpizza', component: ViewpizzaComponent, canActivate: [AdminGuard] },
  { path: 'admin/editpizza', component: EditpizzaComponent, canActivate: [AdminGuard] },
  { path: 'admin/viewuser', component: ViewuserComponent, canActivate: [AdminGuard] },
  { path: 'admin/viewoneuser', component: ViewoneuserComponent, canActivate: [AdminGuard] },


  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'reset', component: ResetComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'reset-password-done', component: ResetPasswordDoneComponent },

  { path: 'aa', component: AaComponent },

  { path: 'myprofile', component: MyprofileComponent, canActivate: [AuthGuard] },
  { path: 'change-password', component: ChangepasswordComponent, canActivate: [AuthGuard] },
  { path: 'editprofile', component: EditprofileComponent, canActivate: [AuthGuard] },
  { path: 'userhome', component: UserhomeComponent, canActivate: [AuthGuard] },
  { path: 'useroffer', component: UserofferComponent, canActivate: [AuthGuard] },
  { path: 'userfeedback', component: UserfeedbackComponent, canActivate: [AuthGuard] },
  { path: 'empty-cart', component:  EmptycartComponent, canActivate: [AuthGuard] },
  { path: 'cart', component: CartComponent, canActivate: [AuthGuard] },
  { path: '**', component: ErrComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ErrComponent, HeaderComponent, MainComponent]