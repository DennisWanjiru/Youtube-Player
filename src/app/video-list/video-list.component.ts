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
      embed: `ClU3fctbGls`
    },

    {
      name: "Dust till Dawn",
      artist: "Zyne ft Sia",
      embed: `tt2k8PGm-TI`
    },

    // {
    //   name: "video 3",
    //   slug: "video-3",
    //   embed: null
    // },

    {
      name: "Heavy",
      artist: "Linkin Park ft Kiira",
      embed: `tt2k8PGm-TI`
    },

    {
      name: "It Ain't Me",
      artist: "Selena Gome ft Kygo",
      embed: `tt2k8PGm-TI`
    },

    {
      name: "Mi Gente",
      artist: "B ft Willy William",
      embed: `tt2k8PGm-TI`
    },

    {
      name: "Came Here for Love",
      artist: "Sigala",
      embed: `tt2k8PGm-TI`
    },

    {
      name: "Heavy",
      artist: "Linkin Park ft Kiira",
      embed: `tt2k8PGm-TI`
    },

    {
      name: "It Ain't Me",
      artist: "Selena Gome ft Kygo",
      embed: `tt2k8PGm-TI`
    },

    {
      name: "Mi Gente",
      artist: "B ft Willy William",
      embed: `tt2k8PGm-TI`
    },

    {
      name: "Came Here for Love",
      artist: "Sigala",
      embed: `tt2k8PGm-TI`
    },
  ]

  constructor() { }

  ngOnInit() {
  }

  getEmbedUrl(video) {
    return 'https://www.youtube.com/embed/' + video.embed
  }

}
