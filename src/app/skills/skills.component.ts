import { Component, OnInit } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  msg = 'Skills';
  faStar = faStar;

  skills = [
    {
      name: 'ANGULAR 7',
      rating: 60,
      ratingWidth: null
    },
    {
      name: 'Html 5',
      rating: 85,
      ratingWidth: null
    },
    {
      name: 'Css 3',
      rating: 70,
      ratingWidth: null
    },
    {
      name: 'Js',
      rating: 60,
      ratingWidth: null
    },
    {
      name: 'Bootstrap 4',
      rating: 80,
      ratingWidth: null
    },
    {
      name: 'Ionic 3',
      rating: 60,
      ratingWidth: null
    },
    {
      name: 'Nodejs',
      rating: 50,
      ratingWidth: null
    }
  ];

  rating = 4.5;
  // ratingWidth=0;

  constructor() {
    // this.ratingWidth = this.rating * 18;
    this.calRating();
  }

  ngOnInit(): void {
  }

  calRating() {
    // ratingWidth
    for (const data of this.skills) {
      data.ratingWidth = data.rating * 18;
    }
  }


}
