import { Injectable } from '@angular/core';
import { POSTS } from './mock-posts';
import { PostDetail } from './post-detail.model';

@Injectable()
export class PostDetailService {

  constructor() { }

  getPosts() {
    return POSTS;
  }

  getPostById(postId: number) {
    for(let i = 0; i < POSTS.length; i++) {
      if(POSTS[i].id === postId) {
        return POSTS[i];
      }
    }
  }
}
