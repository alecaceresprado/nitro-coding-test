import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";

import { Post } from '@models';

@Injectable({
  providedIn: "root"
})
export class PostService {

  constructor(private http: HttpClient) {}

  public getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('api/posts');
  }
}
