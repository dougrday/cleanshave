import { Component } from 'angular2/core';
import { Router } from 'angular2/router';

@Component({
	selector: 'home',
	templateUrl: './app/home/home.html',
    directives: []
})
export class Home{
	constructor(private _router: Router) {
	}

    goToPeople() {
        this._router.navigate(['People', {}]);
    }

    goToCharacters() {
        this._router.navigate(['Characters', {}]);
    }
}
