import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Subreddit } from '../subreddit.model';
import { SubredditService } from '../subreddit.service';
import { PostDetail } from '../post-detail.model';
import { PostDetailService } from '../post-detail.service';

@Component({
  selector: 'app-subreddit-detail',
  templateUrl: './subreddit-detail.component.html',
  styleUrls: ['./subreddit-detail.component.css'],
  providers: [SubredditService, PostDetailService]
})
export class SubredditDetailComponent implements OnInit {
  subredditId: number;
  subredditToDisplay: Subreddit;
  posts: PostDetail[];

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private subredditService: SubredditService,
    private postDetailService: PostDetailService,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.subredditId = parseInt(urlParameters['id']);
    });
    this.subredditToDisplay = this.subredditService.getSubredditById(this.subredditId);
    this.posts = this.postDetailService.getPosts();
  }

  goToPostDetail(postDetailId: number) {
    this.router.navigate(['post', postDetailId]);
  }

}
