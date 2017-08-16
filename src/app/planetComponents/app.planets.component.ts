import { Component, OnInit } from '@angular/core';
import { StarWarsService } from './../app.service.module';
import { Planets } from './../model/planets';

@Component({
  moduleId: module.id,
  templateUrl: './app.planets.component.html'
})
export class PlanetsComponent implements OnInit {
  getPlanets: any[] = [];

  constructor(public starwarsService: StarWarsService) {
  }

  /**
     Oninit get all planets
  */
  ngOnInit(): void {
    this.starwarsService.getPlanets()
      .subscribe(res => { this.getPlanets = res; });
  }
}
