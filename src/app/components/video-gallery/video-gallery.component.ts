import {Component, OnInit} from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'app-video-gallery',
  templateUrl: './video-gallery.component.html',
  styleUrls: ['./video-gallery.component.css']
})
export class VideoGalleryComponent implements OnInit {

  videoList: any[] = []
  channelIDs: string[] = []

  profileImages: any = []

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.asyncInit().then()

  }

  async asyncInit() {
    let videos = await this.getVideos()
    this.videoList = Object.values(JSON.parse(videos))

    this.videoList.forEach((item) => {
        this.channelIDs.push(item.channelID)
    })

    let profileImagesRes = await this.getPFP(this.channelIDs)
    this.profileImages = JSON.parse(profileImagesRes)

  }

  async getVideos() {
    const res = await fetch('http://localhost:3000/getPopular');
    return await res.json();
  }

  async getPFP(channelIds: Array<string>) {
    const ids = channelIds.join()
    const res = await fetch('http://localhost:3000/getProfileImages?channels='+ids);
    console.log(res)
    return await res.json();
  }

  getVideoPFP(channelID: string) {
    if (this.profileImages) {
      return this.profileImages[channelID]
    }
  }

  timeFormat(time: string) {
    // TODO: Test videos less than a minute long
    // time = PT39M58S => '39:58'
    let ptRemoval = time.substring(2).slice(0, -1)
    let timeOutput = ptRemoval.split('M')
    if (!timeOutput[1]) {
      timeOutput.push('00')
    }
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
