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
    window.open('./assets/pritam_das_resume.pdf', 'Download');
  }

}
