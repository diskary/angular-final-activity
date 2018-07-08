import { Component, Input, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {
  @Input() title: string;
  @Input() content: string;
  @Input() loveIts: number;
  @Input() created_at: Date;
  @Input() id: number;
  
  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  onLoveIt() {
    this.loveIts++;
  }

  onDontLoveIt() {
    this.loveIts--;
  }

  getColor() {
    if(this.loveIts > 0) {
      return 'green';
    } else if(this.loveIts < 0) {
      return 'red';
    }
  }

  onDelete(){
   
    this.postService.deletePost(this.id);
    
  }
}
