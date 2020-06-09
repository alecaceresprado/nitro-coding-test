import { Component, OnInit, Input } from '@angular/core';

import { Post } from '@models';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {

  @Input()  public post: Post;
  /*
   {
      "location": "Sydney",
      "author": "Happy Developer",
      "text": "An expectation of digital efficiency has become the norm in our daily lives"
    },
  */
  constructor() { }

  ngOnInit(): void {
  }
  public get postDate(): string {
    const postDate = new Date(Number(this.post.time))
    return `${postDate.getFullYear()}/${postDate.getMonth()}/${postDate.getDay()}`;
  }
}
