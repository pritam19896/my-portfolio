import { Component, OnInit } from '@angular/core';

import { Blog } from '../../models/blog';
import { BlogService } from '../../services/blog.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {

  msg = 'Blog'

  blogInfo:Blog[];
  constructor(private blogServices: BlogService) { }


  ngOnInit(): void {

    this.blogServices.getBlogs().subscribe(data => {
      console.log(data);
      this.blogInfo = data;
    });

  }

}
