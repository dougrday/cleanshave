import { Injectable } from 'angular2/core';
import { Api } from './Api';

const characters: Array<any> = [{"_id":"2","isActive":true,"name":"Sven Killpatrick"},{"_id":"1","isActive":true,"name":"Simon the Vagabond"},{"_id":"6","isActive":true,"name":"Lt. Devin O'Reily"},{"_id":"7","isActive":true,"name":"Landriss the Bold"},{"_id":"3","isActive":true,"name":"Ogor"},{"_id":"4","isActive":true,"name":"Vyzcis"}];

/**
 * A Character service, used to interaction with character data.
 */
@Injectable()
export class CharacterService {
    constructor(private _api: Api) { }

    getCharacters() {
        return Promise.resolve(characters);
        // return this._api
        //     .get("http://nerdfest.servegame.com/characters")
        //     .fetch();
    }

    getCharacter(id: string) {
        const character = characters.find(c => c._id === id);
        if (character) {
            return Promise.resolve(character);
        }
        return Promise.reject();
        // return this._api
        //     .get(`http://nerdfest.servegame.com/character/${id}`)
        //     .fetch();
    }
}
