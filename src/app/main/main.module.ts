import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { VisitorFormComponent } from './visitor-form/visitor-form.component';
import { AppRoutingModule } from '../app-routing.module';

import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MainLayoutComponent,
    HomeComponent,
    AboutComponent,
    GalleryComponent,
    VisitorFormComponent,
    HeaderComponent,
    FooterComponent,
  ],

  imports: [CommonModule, AppRoutingModule, ReactiveFormsModule],
})
export class MainModule {}
