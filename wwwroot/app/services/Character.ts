import { Injectable } from 'angular2/core';
import { Api } from './Api';

/**
 * A Character service, used to interaction with character data.
 */
@Injectable()
export class CharacterService {
    constructor(private _api: Api) { }

    getCharacters() {
        return this._api
            .get("/api/characters")
            .fetch();
    }

    getCharacter(id: string) {
        return this._api
            .get(`/api/character/${id}`)
            .fetch();
    }
}
