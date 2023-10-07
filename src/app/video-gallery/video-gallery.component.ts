import { Component } from '@angular/core';

@Component({
  selector: 'app-video-gallery',
  templateUrl: './video-gallery.component.html',
  styleUrls: ['./video-gallery.component.css']
})
export class VideoGalleryComponent {

  videoList: any[] = []

  constructor() {
    this.getVideos().then(res => {
      const trending: any = JSON.parse(res)
      this.videoList = Object.values(trending)
      console.log(this.videoList)
    });
  }

  async getVideos() {
    const res = await fetch('http://localhost:3000/getPopular');
    return await res.json();
  }

  vidLink(id: string) {
    // TODO: unsafe value in link error
    const url = 'https://www.youtube.com/embed/' + id + '?origin=localhost:4200'
    console.log(url)
    return url
  }
}
