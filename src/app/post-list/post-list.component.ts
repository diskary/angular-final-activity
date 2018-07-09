import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../models/posts';
import { PostService } from '../services/post.service';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {
  posts: any[];
  postSubcription: Subscription;

  constructor(private postService: PostService) {
  }

  ngOnInit() {
    // On récupère la liste des postes du service 
      this.postSubcription = this.postService.postSubject.subscribe(
      (post: any[]) => {
        this.posts = post;
      }
    );
    this.postService.emitPostSubject();
  }

  ngOnDestroy(){
    this.postSubcription.unsubscribe();
  }
}