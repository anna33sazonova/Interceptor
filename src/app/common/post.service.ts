import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from './post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  urlPost = "https://jsonplaceholder.typicode.com/posts/";

  constructor(private httpClient: HttpClient) { }

  getPost(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(this.urlPost);
  }
}
