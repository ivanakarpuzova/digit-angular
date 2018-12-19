import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';
import { HomeTileComponent } from './home-tile/home-tile.component';
import { HomeComponent } from './home/home.component';
import {  MatTheme } from './theme-lib';
import { FindDogComponent } from './find-dog/find-dog.component';
import { DogTileComponent } from './find-dog/dog-tile/dog-tile.component';
import { DogService } from './find-dog/dog.service';
import { MatDialogModule} from '@angular/material/dialog';
import { DogDetailsComponent } from './dog-details/dog-details.component';
import { ReportComponent } from './report/report.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    HomeTileComponent,
    HomeComponent,
    FindDogComponent,
    DogTileComponent,
    DogDetailsComponent,
    ReportComponent,
    FooterComponent,
    ContactUsComponent
  ],
  entryComponents: [
    //za poopup dialogot mora vie entryComponents da se dodadat
    DogDetailsComponent
  ],
  imports: [
    MatTheme,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
