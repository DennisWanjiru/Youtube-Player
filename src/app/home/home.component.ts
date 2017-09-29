import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  images = [
    {
      src: "assets/images/3.jpg",
      title: "First slide label",
      desc: "Nulla vitae elit libero, a pharetra augue mollis interdum."
    },

    {
      src: "assets/images/sam.jpg",
      title: "Second slide label",
      desc: "Nulla vitae elit libero, a pharetra augue mollis interdum."
    },

    {
      src: "assets/images/luca.jpg",
      title: "Third slide label",
      desc: "Nulla vitae elit libero, a pharetra augue mollis interdum."
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
