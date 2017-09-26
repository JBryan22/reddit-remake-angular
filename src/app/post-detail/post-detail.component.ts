import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { PostDetail } from '../post-detail.model';
import { PostDetailService } from '../post-detail.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css'],
  providers: [PostDetailService]
})
export class PostDetailComponent implements OnInit {
  postDetailId: number;
  postToDisplay: PostDetail;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private postDetailService: PostDetailService
  ) { }
  
  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.postDetailId = parseInt(urlParameters['id']);
    })
    this.postToDisplay = this.postDetailService.getPostById(this.postDetailId);
  }

}
