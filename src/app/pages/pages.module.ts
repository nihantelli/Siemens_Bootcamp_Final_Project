import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';
import { VisitorsComponent } from './visitors/visitors.component';
import { PagesLayoutComponent } from './pages-layout/pages-layout.component';
import { AppRoutingModule } from '../app-routing.module';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { HeaderPagesComponent } from './shared-pages/header-pages/header-pages.component';
import { DetailComponent } from './post-detail/detail.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { CommentsComponent } from './comments/comments.component';
import { MainModule } from '../main/main.module';

@NgModule({
  declarations: [
    PostsComponent,
    UsersComponent,
    VisitorsComponent,
    PagesLayoutComponent,
    AdminHomeComponent,
    HeaderPagesComponent,
    DetailComponent,
    UserDetailComponent,
    CommentsComponent,
    
  ],
  imports: [CommonModule, AppRoutingModule, AppRoutingModule, MainModule],
})
export class PagesModule {}
