import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Subreddit } from '../subreddit.model';
import { SubredditService } from '../subreddit.service';

@Component({
  selector: 'app-subreddit-detail',
  templateUrl: './subreddit-detail.component.html',
  styleUrls: ['./subreddit-detail.component.css'],
  providers: [SubredditService]
})
export class SubredditDetailComponent implements OnInit {
  subredditId: number;
  subredditToDisplay: Subreddit;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private subredditService: SubredditService
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.subredditId = parseInt(urlParameters['id']);
    });
    this.subredditToDisplay = this.subredditService.getSubredditById(this.subredditId);
  }

}
