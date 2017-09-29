import { Component, OnInit, OnDestroy } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {
  title = "Videos List"
  private req: any;
  videos: any[];

  constructor(private htttp: Http) { }

  ngOnInit() {
    this.req = this.htttp.get("assets/json/videos.json").subscribe(data => {
      this.videos = data.json() as any[]
    })
  }

  ngOnDestroy() {
    this.req.unsubscribe()
  }

  getEmbedUrl(video) {
    return 'https://www.youtube.com/embed/' + video.embed
  }
}
