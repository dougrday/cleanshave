import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
//import { Routes, APP_ROUTES } from './routes.config';
import { HTTP_PROVIDERS } from 'angular2/http';
import { Api } from './services/Api';
import { PeopleService } from './people/people.service';
import { CharacterService } from './services/Character';
import { Home } from './home/Home';
import { About } from './about/About';
import { People } from './people/People';
import { PersonDetail } from './people/PersonDetail';
import { Characters } from './characters/characters';
import { Character } from './characters/character';

@Component({
    selector: 'app',
    templateUrl: './app/app.html',
    styleUrls: ['./app/app.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [Api, PeopleService, CharacterService, ROUTER_PROVIDERS, HTTP_PROVIDERS]
})
@RouteConfig([
    { path: '/', name: 'Home', component: Home, useAsDefault: true },
    { path: '/about', name: 'About', component: About },
    { path: '/people', name: 'People', component: People },
    { path: '/people/:id', name: 'Detail', component: PersonDetail },
    { path: '/characters', name: 'Characters', component: Characters },
    { path: '/character/:id', name: 'Character', component: Character }
])
export class App {

}
