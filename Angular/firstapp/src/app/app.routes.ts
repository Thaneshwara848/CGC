import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { LogoutComponent } from './logout/logout.component';
import { DatabindComponent } from './databind/databind.component';
import { DirectivedemoComponent } from './directivedemo/directivedemo.component';
import { PipedemoComponent } from './pipedemo/pipedemo.component';
import { FromsdemoComponent } from './fromsdemo/fromsdemo.component';

export const routes: Routes = [

    {path:'home',component:HomeComponent},
    { path:'pipedemo',component:PipedemoComponent},
    { path :'forms',component:FromsdemoComponent},
    { path:'dridemo',component:DirectivedemoComponent},
    { path:'databind',component:DatabindComponent},
    {path:'dashboard',component:DashboardComponent},
    {path:'login',component:LoginComponent},
    {path:'signup',component:SignupComponent},
    {path:'logout',component:LogoutComponent},
    {path:'',component:HomeComponent},
    {path:'**',component:LoginComponent}
];
