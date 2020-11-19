// ./src/app/blog-list/blog-list.component.ts
import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../contentful.service';
import { Entry } from 'contentful';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {
  // define private class properties
  public blogs: Entry<any>[] = [];

  constructor(private contentfulService: ContentfulService) { }

  // fetch data on init
  ngOnInit() {
    this.contentfulService.getRecords()
    .then(blogs => this.blogs = blogs)
  }
}