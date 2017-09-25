import { Injectable } from '@angular/core';
import { Subreddit } from './subreddit.model';
import { SUBREDDITS } from './mock-subreddits';

@Injectable()
export class SubredditService {

  constructor() { }

  getSubreddits() {
    return SUBREDDITS;
  }

  getSubredditById(subredditId: number) {
    for(let i = 0; i < SUBREDDITS.length; i++) {
      if(SUBREDDITS[i].id === subredditId) {
        return SUBREDDITS[i];
      }
    }
  }
}
