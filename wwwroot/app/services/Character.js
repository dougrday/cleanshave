System.register(['angular2/core', './Api'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, Api_1;
    var characters, CharacterService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Api_1_1) {
                Api_1 = Api_1_1;
            }],
        execute: function() {
            characters = [{ "_id": "2", "isActive": true, "name": "Sven Killpatrick" }, { "_id": "1", "isActive": true, "name": "Simon the Vagabond" }, { "_id": "6", "isActive": true, "name": "Lt. Devin O'Reily" }, { "_id": "7", "isActive": true, "name": "Landriss the Bold" }, { "_id": "3", "isActive": true, "name": "Ogor" }, { "_id": "4", "isActive": true, "name": "Vyzcis" }];
            /**
             * A Character service, used to interaction with character data.
             */
            CharacterService = (function () {
                function CharacterService(_api) {
                    this._api = _api;
                }
                CharacterService.prototype.getCharacters = function () {
                    return Promise.resolve(characters);
                    // return this._api
                    //     .get("http://nerdfest.servegame.com/characters")
                    //     .fetch();
                };
                CharacterService.prototype.getCharacter = function (id) {
                    var character = characters.find(function (c) { return c._id === id; });
                    if (character) {
                        return Promise.resolve(character);
                    }
                    return Promise.reject();
                    // return this._api
                    //     .get(`http://nerdfest.servegame.com/character/${id}`)
                    //     .fetch();
                };
                CharacterService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [Api_1.Api])
                ], CharacterService);
                return CharacterService;
            }());
            exports_1("CharacterService", CharacterService);
        }
    }
});
//# sourceMappingURL=Character.js.map