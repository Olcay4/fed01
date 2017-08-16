import { Component, OnInit } from '@angular/core';
import { StarWarsService } from './../app.service.module';
import { Peoples } from './../model/peoples';

@Component({
  moduleId: module.id,
  templateUrl: './app.peoples.component.html'
})
export class PeoplesComponent implements OnInit {
  getPeoples: any[] = [];

  constructor(private starwarsService: StarWarsService) {
  }

  /**
     voer uit tijdens laden van de pagina. Get alle items uit je API.
  */
  ngOnInit(): void {
    this.starwarsService.getPeoples()
      .subscribe(res => this.getPeoples = res);

  }

}
