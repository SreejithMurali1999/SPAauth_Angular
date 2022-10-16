import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { RegisterComponent } from './register/register.component';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

const appRoute:Routes = [
  {path:'',component:SignInComponent},
  {path:'Create',component:RegisterComponent},
  {path:'sign-in',component:SignInComponent},
  {path:'signin',component:SignInComponent}
  
  
]

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    RegisterComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,RouterModule.forRoot(appRoute),ReactiveFormsModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
