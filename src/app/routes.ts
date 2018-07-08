import { Routes } from '@angular/router';

import { PostListComponent } from "./post-list/post-list.component";
import { NewPostComponent } from './new-post/new-post.component';


export const appRoutes: Routes = [
    { path: 'posts', component: PostListComponent },
    { path: 'new', component: NewPostComponent}
    
];
