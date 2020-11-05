import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {
  msg = 'About Me';

  constructor() { }

  ngOnInit(): void {
  }

  download() {
    console.log('hello');
    window.open('./assets/resume.pdf', 'Download');
  }

}
