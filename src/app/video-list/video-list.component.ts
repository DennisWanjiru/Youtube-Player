import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {
  title = "Videos List"
  videos = [
    {
      name: "What About Us",
      artist: "P!nk",
      slug: "video-1",
      embed: `ClU3fctbGls`
    },

    {
      name: "Dust till Dawn",
      artist: "Zyne ft Sia",
      slug: "video-2",
      embed: `tt2k8PGm-TI`
    },

    {
      name: "video 3",
      slug: "video-3",
      embed: null
    },
  ]

  constructor() { }

  ngOnInit() {
  }

  getEmbedUrl(video) {
    return 'https://www.youtube.com/embed/' + video.embed
  }

}
