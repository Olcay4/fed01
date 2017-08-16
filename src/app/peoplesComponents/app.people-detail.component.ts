import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { StarWarsService } from './../app.service.module';
import { Peoples } from './../model/peoples';

@Component({
    templateUrl: './app.people-detail.component.html',
    providers: [StarWarsService]
})

export class PeoplesDetailComponent implements OnInit {
    getSinglePerson: string[];
    sub: any;

    constructor(private _route: ActivatedRoute,
        private _router: Router,
        private _StarWarsService: StarWarsService) {
    }

    /**
    Get the selected user page for one single hero.
    */
    ngOnInit() {
        this.sub = this._route.params.subscribe(params => {
            let id = params['id'];
            this._StarWarsService.getOnePerson(id).subscribe(res => this.getSinglePerson = res);
        });
    }

    /**
    Send back the the frontpage on profile.
    */
    onBack(): void {
        this._router.navigate(['/pc']);
    }
}