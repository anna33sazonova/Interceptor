import { Component, OnInit } from '@angular/core';
import { Post } from './common/post.model';
import { PostService } from './common/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  post: Post = new Post (0, 0, '', '');
  posts: Post[] = [];

  constructor(private postService: PostService) {

  }

  ngOnInit(): void {
   this.postService.getPost().subscribe((posts: Post[]) => {this.posts = posts
    })
  }

}
