import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Peoples } from './model/peoples';
import 'rxjs/add/operator/map';

@Injectable()
export class StarWarsService {

    /**
     Link to the API.
    */
    private _StarWarsLink = "https://swapi.co/api/people/";
    private _StarWarsMovieLink = "https://swapi.co/api/films/";
    private _StarWarsPlanetsLink = "https://swapi.co/api/planets/?format=json";

    constructor(private http: Http) {
    }

    /**
     Get peoples from the API
    */
    getPeoples() {
        return this.http.get(this._StarWarsLink)
            .map(res => res.json());
    }

    /**
     Get one specific person with it's url id.
    */
    getOnePerson(url) {
        return this.http.get(url)
            .map(res => res.json());
    }

    /**
     Get Movies from the API
    */
    getMovies() {
        return this.http.get(this._StarWarsMovieLink)
            .map(res => res.json());
    }

    /**
     Get one specific movie with it's url id.
    */
    getOneMovie(url) {
        return this.http.get(url)
            .map(res => res.json());
    }

    /**
     Get planets from the API
    */
    getPlanets() {
        return this.http.get(this._StarWarsPlanetsLink)
            .map(res => res.json());
    }
}