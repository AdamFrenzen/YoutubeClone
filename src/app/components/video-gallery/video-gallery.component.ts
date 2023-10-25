import { Component, OnInit } from '@angular/core';
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
    this.asyncInit().catch()
  }

  async asyncInit() {
    const videos = await this.getVideos()
    this.videoList = Object.values(JSON.parse(videos))

    this.videoList.forEach((item) => {
        this.channelIDs.push(item.channelID)
    })

    const profileImagesRes = await this.getPFP(this.channelIDs)
    this.profileImages = JSON.parse(profileImagesRes)
  }

  async getVideos() {
    const res = await fetch('http://localhost:3000/getPopular');
    return await res.json();
  }

  async getPFP(channelIds: Array<string>) {
    const ids = channelIds.join()
    const res = await fetch('http://localhost:3000/getProfileImages?channels='+ids);
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

  getAge(date: Date) {
    const d1 = (new Date).getTime();
    const d2 = (new Date(date)).getTime();
    const hoursAgo = Math.trunc((d1 - d2) / 3600000);
    if (hoursAgo < 24) {
      return hoursAgo + ' hours ago';
    }
    const daysAgo = Math.floor(hoursAgo / 24);
    if (daysAgo < 14) {
      if (daysAgo === 1) {
        return '1 day ago'
      }
      return daysAgo + ' days ago'
    }
    const weeksAgo = Math.floor(daysAgo / 7);
    if (weeksAgo <= 4) {
      return weeksAgo + ' weeks ago'
    }
    const monthsAgo = Math.floor(weeksAgo / 4);
    if (monthsAgo < 12) {
      if (monthsAgo === 1) {
        return '1 month ago'
      }
      return monthsAgo + ' months ago'
    }
    const yearsAgo = Math.floor(monthsAgo / 12);
    if (yearsAgo === 1) {
      return '1 year ago'
    }
    return yearsAgo + ' years ago'
  }

  vidLink(id: string) {
    const url = 'https://www.youtube.com/embed/' + id + '?autoplay=1&mute=1&origin=localhost:4200'
    // const url = 'https://www.youtube.com/watch?v=' + id
    return this.sanitizer.bypassSecurityTrustResourceUrl(url)
  }
}
