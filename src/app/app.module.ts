import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatToolbarModule,
  MatButtonModule,
  MatTableModule,
  MatListModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { MyLineupComponent } from './my-lineup/my-lineup.component';
import { ImportService } from './shared/import.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PlayerListComponent,
    MyLineupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatTableModule,
    MatListModule
  ],
  providers: [ImportService],
  bootstrap: [AppComponent]
})
export class AppModule { }
