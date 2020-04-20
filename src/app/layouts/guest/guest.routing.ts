import { Routes } from '@angular/router';
import { LoginComponent } from 'src/app/pages/login/login.component';
import { RegisterComponent } from 'src/app/pages/register/register.component';

export const GuestLayoutRoutes : Routes = [
    { path:'', redirectTo:'guest/login', component:LoginComponent},
    { path:'guest', redirectTo:'guest/login', component:LoginComponent},
    { path:'guest/login', component:LoginComponent},
    { path:'guest/register', component:RegisterComponent},
]