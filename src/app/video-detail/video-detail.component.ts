import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';

@Component({
  selector: 'video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css']
})
export class VideoDetailComponent implements OnInit {

  private routeSub: any;
  private req: any;
  videoDetail: any;
  embed: string;

  constructor(private route: ActivatedRoute, private http: Http) { }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      this.embed = params['embed']
    });

    this.req = this.http.get("assets/json/videos.json").subscribe(data => {
      data.json().filter(video => {
        if (video.embed === this.embed) {
          this.videoDetail = video
        }
      });
    });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe()
    this.req.unsubscribe()
  }

}
