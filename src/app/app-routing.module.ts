import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './main/about/about.component';
import { GalleryComponent } from './main/gallery/gallery.component';
import { HomeComponent } from './main/home/home.component';
import { MainLayoutComponent } from './main/main-layout/main-layout.component';
import { VisitorFormComponent } from './main/visitor-form/visitor-form.component';
import { AdminHomeComponent } from './pages/admin-home/admin-home.component';
import { CommentsComponent } from './pages/comments/comments.component';

import { PagesLayoutComponent } from './pages/pages-layout/pages-layout.component';
import { DetailComponent } from './pages/post-detail/detail.component';
import { PostsComponent } from './pages/posts/posts.component';
import { UserDetailComponent } from './pages/user-detail/user-detail.component';
import { UsersComponent } from './pages/users/users.component';
import { VisitorsComponent } from './pages/visitors/visitors.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'gallery', component: GalleryComponent },
      { path: 'visitor-form', component: VisitorFormComponent },
      { path: 'admin', component: AdminHomeComponent },
    ],
  },
  {
    path: 'pages',
    component: PagesLayoutComponent,
    children: [
      { path: '', component: AdminHomeComponent },
      { path: 'admin-home', component: AdminHomeComponent },
      { path: 'posts', component: PostsComponent },
      { path: 'users', component: UsersComponent },
      { path: 'visitor-data', component: VisitorsComponent },
      { path: 'post-detail/:id', component: DetailComponent },
      { path: 'user-detail/:id', component: UserDetailComponent },
      { path: 'comments/:id', component: CommentsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
