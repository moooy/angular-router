import {HeroService} from "./heroes/hero.service";
import {HeroListComponent} from "./heroes/hero-list.component";
import {HeroDetailComponent} from "./heroes/hero-detail.component";
import {DialogService} from "./dialog.service";
import {CrisisListComponent} from "./crisis-center/crisis-list.component";
import {CrisisCenterComponent} from "./crisis-center/crisis-center.component";
import {Component} from 'angular2/core';
import {RouteConfig,ROUTER_DIRECTIVES} from 'angular2/router';
@Component({
    selector: 'my-app',
    template: `<h1>Component Router</h1>
    <nav>
      <a [routerLink]="['CrisisCenter']">Crisis Center</a>
      <a [routerLink]="['Heroes']">Heroes</a>
    </nav>
    <router-outlet></router-outlet>
    `,
    directives:[ROUTER_DIRECTIVES],
    providers:  [DialogService,HeroService],
})

@RouteConfig([

  {
    path: '/crisis-center/...',
    name: 'CrisisCenter',
    component: CrisisCenterComponent,
    useAsDefault: true
  },
  {path: '/heroes',   name: 'Heroes',     component: HeroListComponent},
  {path: '/disaster', name: 'Asteroid', redirectTo: ['CrisisCenter', 'CrisisDetail', {id:3}]},
  {path: '/hero/:id', name: 'HeroDetail', component: HeroDetailComponent},
])
export class AppComponent { }
