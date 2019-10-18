import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutes } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { NavbarComponent } from './static/navbar.component';
import { MovieCardComponent } from './movie/movie-card.component';
import { WelcomeNoteComponent } from './movie-list/welcome-note.component';
import { FooterComponent } from './static/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieDetailComponent } from './movie/movie-detail.component';
import { RouterModule } from '@angular/router';
import { LikeComponent } from './movie/like.component';
import { FavouriteComponent } from './movie/favourite.component';




@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    NavbarComponent,
    MovieCardComponent,
    WelcomeNoteComponent,
    FooterComponent,
    MovieDetailComponent,
    LikeComponent,
    FavouriteComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
