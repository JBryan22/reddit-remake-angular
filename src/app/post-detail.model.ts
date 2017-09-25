export class PostDetail {
  constructor(public title: string, public subreddit: string, public content: string, public id: number, public imageURL: string = null, public videoURL: string = null) {}
}
