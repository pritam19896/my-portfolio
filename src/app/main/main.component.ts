import { Component, OnInit } from '@angular/core';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  navbarOpen = false;

  constructor(private myElement: ElementRef) {}

  ngOnInit(): void {}

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  gotoSelected(data) {
    let el;
    switch (data) {
      case 'project':
        el = this.myElement.nativeElement.querySelector('app-gallery');
        break;
      case 'about':
        el = this.myElement.nativeElement.querySelector('app-aboutme');
        break;
      case 'skills':
        el = this.myElement.nativeElement.querySelector('app-skills');
        break;
      case 'blog':
        el = this.myElement.nativeElement.querySelector('app-blog');
        break;
      case 'contactme':
        el = this.myElement.nativeElement.querySelector('app-contactme');
        break;
    }

    el.scrollIntoView();
  }
}
