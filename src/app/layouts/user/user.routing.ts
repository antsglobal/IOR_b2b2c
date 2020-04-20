import { Routes } from '@angular/router';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { AboutComponent } from 'src/app/pages/about/about.component';
import { RadiofrequencyComponent } from 'src/app/pages/radiofrequency/radiofrequency.component';
import { BluetoothComponent } from 'src/app/pages/bluetooth/bluetooth.component';
import { SonicComponent } from 'src/app/pages/sonic/sonic.component';
import { TouchComponent } from 'src/app/pages/touch/touch.component';
import { WeightComponent } from 'src/app/pages/weight/weight.component';

export const UserLayoutRoutes:Routes = [
    {path:'user', redirectTo:'user/home', component:HomeComponent},
    {path:'user/home', component:HomeComponent},
    {path:'user/radiofrequency', component:RadiofrequencyComponent},
    {path:'user/bluetooth', component:BluetoothComponent},
    {path:'user/sonic', component:SonicComponent},
    {path:'user/touch', component:TouchComponent},
    {path:'user/weight', component:WeightComponent}
]