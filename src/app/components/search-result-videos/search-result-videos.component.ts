import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-search-result-videos',
  templateUrl: './search-result-videos.component.html',
  styleUrls: ['./search-result-videos.component.css']
})
export class SearchResultVideosComponent implements OnInit {

  videoList: any[] = []
  channelIDs: string[] = []

  ngOnInit() {
    this.asyncInit().catch()
  }

  async asyncInit() {
    const videos = await this.getVideos('coding')
    this.videoList = Object.values(JSON.parse(videos))

    console.log(this.videoList)

    this.videoList.forEach((item) => {
      this.channelIDs.push(item.channelID)
    })
  }

  async getVideos(searchTerm: string) {
    const res = await fetch('http://localhost:3000/search?term='+searchTerm);
    return await res.json()
  }

}
