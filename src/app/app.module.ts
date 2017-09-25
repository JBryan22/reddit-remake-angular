import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { SubredditsComponent } from './subreddits/subreddits.component';
import { SubredditDetailComponent } from './subreddit-detail/subreddit-detail.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    SubredditsComponent,
    SubredditDetailComponent,
    PostDetailComponent,
    HomePageComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
