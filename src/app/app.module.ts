import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from './material/material-module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserComponent } from './user/user.component';
import { UsersService } from './users.service';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [BrowserModule, FormsModule, MaterialModule, AppRoutingModule, BrowserAnimationsModule],
  declarations: [AppComponent, HomeComponent, PageNotFoundComponent, UserListComponent, UserComponent, UserSettingsComponent],
  bootstrap: [AppComponent],
  providers: [UsersService]
})
export class AppModule { }
