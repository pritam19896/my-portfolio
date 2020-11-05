import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HeaderComponent } from './header/header.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { SkillsComponent } from './skills/skills.component';
import { BlogComponent } from './blog/blog.component';
import { ContactmeComponent } from './contactme/contactme.component';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MainComponent } from './main/main.component';
import { BlogDetailsComponent } from './blog/blog-details/blog-details.component';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: "/home",
    pathMatch: 'full'
  },
  { path: 'home', component: MainComponent },
  { path: 'blog', component: BlogDetailsComponent },

]

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    HeaderComponent,
    AboutmeComponent,
    SkillsComponent,
    BlogComponent,
    ContactmeComponent,
    FooterComponent,
    MainComponent,
    BlogDetailsComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
