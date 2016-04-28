import { Component, Input } from 'angular2/core';
import { RouteParams, Router } from 'angular2/router';
import { CharacterService } from '../services/Character';

@Component({
    selector: 'character',
    templateUrl: './app/characters/character.html',
    directives: [],
})
export class Character {
    @Input() id: string;
    public data: any;

    constructor(
        private _characterService: CharacterService,
        private _routeParams : RouteParams) {

        if (!this.id) {
            // Try to retrieve the id from the route, if
            // none was provided.
            this.id = this._routeParams.get("id");
        }

        // Retrieve the character data from the API
        _characterService
            .getCharacter(this.id)
            .then(res => {
                this.data = res.json;
            });
    }
}
