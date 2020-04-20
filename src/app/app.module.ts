import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { UserComponent } from './layouts/user/user.component';
import { GuestComponent } from './layouts/guest/guest.component';
import { HeaderComponent } from './components/header/header.component';
import { SidemenuComponent } from './components/sidemenu/sidemenu.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { UserheaderComponent } from './components/userheader/userheader.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RadiofrequencyComponent } from './pages/radiofrequency/radiofrequency.component';
import { BluetoothComponent } from './pages/bluetooth/bluetooth.component';
import { SonicComponent } from './pages/sonic/sonic.component';
import { TouchComponent } from './pages/touch/touch.component';
import { WeightComponent } from './pages/weight/weight.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidemenuComponent,
    UserComponent,
    GuestComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    AboutComponent,
    UserheaderComponent,
    RadiofrequencyComponent,
    BluetoothComponent,
    SonicComponent,
    TouchComponent,
    WeightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
