import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../models/posts';
import { PostService } from '../services/post.service';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  posts: any[];
  postSubcription = Subscription;

  constructor(private postService: PostService) {
  }

  ngOnInit() {
    // On récupère la liste des postes du service 
    this.posts = this.postService.getAllPost();
    console.log(this.posts);
  }
}