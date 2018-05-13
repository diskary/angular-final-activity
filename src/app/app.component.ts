import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  premierPost: Post = new Post('Mon premier post', 'Contenu de mon premier post');
  secondPost: Post = new Post('Mon second post', 'Contenu de mon second post');
  dernierPost: Post = new Post('Mon dernier post', 'Contenu de mon dernier post');
  posts: Array<Post> = [this.premierPost, this.secondPost, this.dernierPost];

  constructor() {
  }
}

export class Post {
  title: string;
  content: string;
  loveIts: number;
  created_at: Date;

  constructor(title: string, content: string) {
    this.title = title;
    this.content = content;
    this.loveIts = 0;
    this.created_at = new Date();
  }
}