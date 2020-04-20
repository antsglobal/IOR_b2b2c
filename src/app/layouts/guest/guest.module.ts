import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../.././material.module';

import { GuestLayoutRoutes } from './guest.routing';

import { HeaderComponent } from 'src/app/components/header/header.component';
import { LoginComponent } from 'src/app/pages/login/login.component';
import { RegisterComponent } from 'src/app/pages/register/register.component';
import { HomeComponent } from 'src/app/pages/home/home.component';

@NgModule({
imports:[
    CommonModule,
    RouterModule.forChild(GuestLayoutRoutes),
    FormsModule,
    MaterialModule
],
declarations:[
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent
],
schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GuestModule {

}