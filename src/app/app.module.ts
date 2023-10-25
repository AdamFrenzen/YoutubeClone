import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { VideoGalleryComponent } from './components/video-gallery/video-gallery.component';
import { ShortNumberPipe } from './pipes/short-number.pipe';
import {ReactiveFormsModule} from "@angular/forms";
import { SearchResultVideosComponent } from './components/search-result-videos/search-result-videos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    VideoGalleryComponent,
    ShortNumberPipe,
    SearchResultVideosComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FontAwesomeModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
