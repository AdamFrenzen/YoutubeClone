import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { VideoGalleryComponent } from './components/video-gallery/video-gallery.component';
import { ShortNumberPipe } from './pipes/short-number.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    VideoGalleryComponent,
    ShortNumberPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
