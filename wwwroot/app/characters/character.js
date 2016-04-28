System.register(['angular2/core', 'angular2/router', '../services/Character'], function(exports_1, context_1) {
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
    var core_1, router_1, Character_1;
    var Character;
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
            }],
        execute: function() {
            Character = (function () {
                function Character(_characterService, _routeParams) {
                    var _this = this;
                    this._characterService = _characterService;
                    this._routeParams = _routeParams;
                    if (!this.id) {
                        // Try to retrieve the id from the route, if
                        // none was provided.
                        this.id = this._routeParams.get("id");
                    }
                    // Retrieve the character data from the API
                    _characterService
                        .getCharacter(this.id)
                        .then(function (res) { return _this.data = res; });
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], Character.prototype, "id", void 0);
                Character = __decorate([
                    core_1.Component({
                        selector: 'character',
                        templateUrl: './app/characters/character.html',
                        directives: [],
                    }), 
                    __metadata('design:paramtypes', [Character_1.CharacterService, router_1.RouteParams])
                ], Character);
                return Character;
            }());
            exports_1("Character", Character);
        }
    }
});
//# sourceMappingURL=character.js.map