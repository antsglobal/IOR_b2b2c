import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuestComponent } from './layouts/guest/guest.component';
import { UserComponent } from './layouts/user/user.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { RadiofrequencyComponent } from './pages/radioFrequency/radiofrequency.component';
import { BluetoothComponent } from './pages/bluetooth/bluetooth.component';
import { SonicComponent } from './pages/sonic/sonic.component';
import { TouchComponent } from './pages/touch/touch.component';
import { WeightComponent } from './pages/weight/weight.component';


const routes: Routes = [
  {
    path:'',
    redirectTo: "guest/login",
    pathMatch:'full'
  },
  {
    path: 'guest',
    component: GuestComponent,
    children: [
      {
        path:'',
        component: LoginComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path:'register',
        component: RegisterComponent
      },
      {
        path:'home',
        component: HomeComponent
      }
      
    ]
  },
  {
    path: 'user',
    component: UserComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path:'home',
        component:HomeComponent
      },
      {
        path:'about',
        component:AboutComponent
      },
      {
        path:'radiofrequency',
        component:RadiofrequencyComponent
      },
      {
        path:'bluetooth',
        component:BluetoothComponent
      },
      {
        path:'sonic',
        component:SonicComponent
      },
      {
        path:'touch',
        component:TouchComponent
      },
      {
        path:'weight',
        component:WeightComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
