import { Component } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'app-video-gallery',
  templateUrl: './video-gallery.component.html',
  styleUrls: ['./video-gallery.component.css']
})
export class VideoGalleryComponent {

  videoList: any[] = []

  constructor(private sanitizer: DomSanitizer) {
    this.getVideos().then(res => {
      const trending: any = JSON.parse(res)
      this.videoList = Object.values(trending)
      console.log(this.videoList[0])
    });
  }

  async getVideos() {
    const res = await fetch('http://localhost:3000/getPopular');
    return await res.json();
  }

  timeFormat(time: string) {
    // time = PT39M58S => '39:58'
    let ptRemoval = time.substring(2).slice(0, -1)
    let timeOutput = ptRemoval.split('M')
    if (timeOutput[1].length === 1) {
      timeOutput[1] = '0' + timeOutput[1]
    }
    return (timeOutput[0]+':'+timeOutput[1])
  }

  vidLink(id: string) {
    const url = 'https://www.youtube.com/embed/' + id + '?origin=localhost:4200'
    return this.sanitizer.bypassSecurityTrustResourceUrl(url)
  }
}
