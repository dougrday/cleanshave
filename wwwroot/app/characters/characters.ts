import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { CharacterService } from '../services/Character';
import { Character } from './character';

@Component({
    selector: 'characters',
    templateUrl: './app/characters/characters.html',
    directives: [Character],
})
export class Characters {
    public characters: Array<any>;

    constructor(
        private _characterService: CharacterService,
        private _router: Router) {
        _characterService
            .getCharacters()
            .then(res => {
                this.characters = res.json;
            });
    }

    goToCharacter(id) {
        this._router.navigate(['Character', { id: id }]);
    }
}
