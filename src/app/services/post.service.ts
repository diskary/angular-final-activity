import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Post } from '../models/posts';


@Injectable()
export class PostService {

  post = [];
  postSubject = new Subject<any[]>();

  emitPostSubject(){
    this.postSubject.next(this.post.slice());
  }

  constructor() { }

  getAllPost(){
    return this.post;
  }

  createPost(postData: Post){
  
    const addPost = new Post(this.setPostId(), postData.title, postData.content);
    this.post.push(addPost);

    //this.emitPostSubject();
  }

  deletePost(postId: number){
    
    this.post.forEach(function(element,index,object){
      if(element.id === postId){
        object.splice(index,1);
      }
      
    });
  }

  setPostId(){
    // On récupère la taille du tableau
    const postLength = this.post.length;
    let id:number = 0;

    if(postLength > 0){
      // On récupère le dernier élément du tableau
      let lastElement = this.post[postLength - 1];
      // Ajout de l'id en incrémentant de 1 la valeur du dernier id du tableau
      id = lastElement.id + 1;
    }else{
      id = 1;
    }
    return id;
  }
}
