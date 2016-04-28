System.register(['angular2/core', 'angular2/router', '../services/Character', './character'], function(exports_1, context_1) {
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
    var core_1, router_1, Character_1, character_1;
    var Characters;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (Character_1_1) {
                Character_1 = Character_1_1;
            },
            function (character_1_1) {
                character_1 = character_1_1;
            }],
        execute: function() {
            Characters = (function () {
                function Characters(_characterService, _router) {
                    var _this = this;
                    this._characterService = _characterService;
                    this._router = _router;
                    _characterService
                        .getCharacters()
                        .then(function (res) {
                        _this.characters = res.json;
                    });
                }
                Characters.prototype.goToCharacter = function (id) {
                    this._router.navigate(['Character', { id: id }]);
                };
                Characters = __decorate([
                    core_1.Component({
                        selector: 'characters',
                        templateUrl: './app/characters/characters.html',
                        directives: [character_1.Character],
                    }), 
                    __metadata('design:paramtypes', [Character_1.CharacterService, router_1.Router])
                ], Characters);
                return Characters;
            }());
            exports_1("Characters", Characters);
        }
    }
});
//# sourceMappingURL=characters.js.map