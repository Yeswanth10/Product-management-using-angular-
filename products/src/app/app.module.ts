import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule ,FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './Mycomponents/create/create.component';
import { EditComponent } from './Mycomponents/edit/edit.component';
import { HomeComponent } from './Mycomponents/home/home.component';
// import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import {UserModule} from './user/user.module';
import { FilterPipe } from './filter.pipe'


@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    EditComponent,
    HomeComponent,
    FilterPipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
