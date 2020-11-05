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
      rating: 3,
      ratingWidth: null
    },
    {
      name: 'Html 5',
      rating: 4.5,
      ratingWidth: null
    },
    {
      name: 'Css 3',
      rating: 3,
      ratingWidth: null
    },
    {
      name: 'Js',
      rating: 3,
      ratingWidth: null
    },
    {
      name: 'Bootstrap 4',
      rating: 4,
      ratingWidth: null
    },
    {
      name: 'Ionic 3',
      rating: 3,
      ratingWidth: null
    },
    {
      name: 'Nodejs',
      rating: 2.5,
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
