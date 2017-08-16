import { Component, OnInit } from '@angular/core';
import { StarWarsService } from './../app.service.module';
import { Movies } from './../model/movies';

@Component({
  moduleId: module.id,
  templateUrl: './app.movies.component.html'
})
export class MoviesComponent {
  getMovies: any[] = [];

  constructor(private starwarsService: StarWarsService) {
  }

  /**
     Get all movies when the page loads.
  */
  ngOnInit(): void {
    this.starwarsService.getMovies()
      .subscribe(res => this.getMovies = res);

  }

}
