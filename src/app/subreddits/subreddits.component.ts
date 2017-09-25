import { Component, OnInit } from '@angular/core';
import { Subreddit } from '../subreddit.model';
import { SubredditService } from '../subreddit.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subreddits',
  templateUrl: './subreddits.component.html',
  styleUrls: ['./subreddits.component.css'],
  providers: [SubredditService]
})
export class SubredditsComponent implements OnInit {
  subreddits: Subreddit[];

  constructor(private router: Router, private subredditService: SubredditService) { }

  ngOnInit() {
    this.subreddits = this.subredditService.getSubreddits();
  }

  goToSubredditDetail(subredditId: number) {
    this.router.navigate(['subreddits', subredditId]);
  }

}
