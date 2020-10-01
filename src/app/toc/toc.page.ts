import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toc',
  templateUrl: './toc.page.html',
  styleUrls: ['./toc.page.scss'],
})
export class TocPage implements OnInit {
  public chapters = [
    {
      title: "Chapter 1 | The Beginning",
      url: "/chapter1"
    },
    {
      title: "Chapter 2 | A Continuation",
      url: "/chapter2"
    },
    {
      title: "Chapter 3 | The Finale",
      url: "/chapter3"
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
