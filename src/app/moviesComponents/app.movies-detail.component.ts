import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { StarWarsService } from './../app.service.module';
import { Movies } from './../model/movies';

@Component({
  templateUrl: './app.movies-detail.component.html',
  providers: [StarWarsService]
})
export class MoviesDetailComponent {
  getSingleMovie: string[];
  sub: any;

   constructor(public _route: ActivatedRoute,
        public _router: Router,
        public _StarWarsMovieLink: StarWarsService) {
    }

  /**
    Get the selected user page for one single movie.
    */
    ngOnInit() {
        this.sub = this._route.params.subscribe(params => {
            let id = params['id'];
            this._StarWarsMovieLink.getOneMovie(id).subscribe(res => this.getSingleMovie = res);
        });
    }

    /**
    Send back the the frontpage of movie.
    */
    onBack(): void {
        this._router.navigate(['/movies']);
    }

}
