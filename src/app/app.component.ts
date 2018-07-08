import { Component } from '@angular/core';
import { Post } from './models/posts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //premierPost: Post = new Post('Mon premier post', 'Contenu de mon premier post');
  //secondPost: Post = new Post('Mon second post', 'Contenu de mon second post');
  //dernierPost: Post = new Post('Mon dernier post', 'Contenu de mon dernier post');
  //posts: Array<Post> = [this.premierPost, this.secondPost, this.dernierPost];

  constructor() {
  }
}