import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PostService } from '../services/post.service';
import { Post } from '../models/posts';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  postForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private postService: PostService,
              private router: Router
              ) { }

  ngOnInit() {
    this.initForm();
  }


  initForm(){
    this.postForm = this.formBuilder.group(
      {
        title: ['',[Validators.required]],
        content: ['',[Validators.required]]
      }
    );
  }

  onSubmitForm(){
    const formValue = this.postForm.value;
    
    this.postService.createPost(formValue);
    this.router.navigate(['/posts']);
  }


}
