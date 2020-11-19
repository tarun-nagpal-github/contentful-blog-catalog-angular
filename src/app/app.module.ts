// ./src/app/app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';
import { AppComponent } from './app.component';
import { ContentfulService } from './contentful.service';
// import new component
import { BlogListComponent } from './blog-list/blog-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/blogs', pathMatch: 'full' },
  // define new component for '/blogs' route
  { path: 'blogs',  component: BlogListComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    // Blog component
    BlogListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [],
  providers: [
    ContentfulService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }