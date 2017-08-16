import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './frontpageComponents/app.component';
import { AppRoutingModule } from './app.router.module';
import { RoutingComponents } from './app.router.module';
import { StarWarsService } from './app.service.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [StarWarsService],
  declarations: [AppComponent, RoutingComponents],
  bootstrap: [AppComponent]
})
export class AppModule { }
