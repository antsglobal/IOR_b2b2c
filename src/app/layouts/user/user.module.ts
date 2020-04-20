import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { UserLayoutRoutes } from './user.routing';

import { HomeComponent } from 'src/app/pages/home/home.component';
import { RadiofrequencyComponent } from 'src/app/pages/radiofrequency/radiofrequency.component';
import { BluetoothComponent } from 'src/app/pages/bluetooth/bluetooth.component';
import { SonicComponent } from 'src/app/pages/sonic/sonic.component';
import { TouchComponent } from 'src/app/pages/touch/touch.component';
import { WeightComponent } from 'src/app/pages/weight/weight.component';
import { SidemenuComponent } from 'src/app/components/sidemenu/sidemenu.component';
import { UserheaderComponent } from 'src/app/components/userheader/userheader.component';

@NgModule({
imports:[
    CommonModule,
    RouterModule.forChild(UserLayoutRoutes),
    FormsModule,
    MaterialModule,
    FontAwesomeModule
],
declarations:[
    UserheaderComponent,
    SidemenuComponent,
    HomeComponent,
    RadiofrequencyComponent,
    BluetoothComponent,
    SonicComponent,
    TouchComponent,
    WeightComponent
],
schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UserModule {

}