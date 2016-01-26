import {CrisisListComponent} from "./crisis-center/crisis-list.component";
import {CrisisCenterComponent} from "./crisis-center/crisis-center.component";
import {Component} from 'angular2/core';
import {RouteConfig,ROUTER_DIRECTIVES} from 'angular2/router';
@Component({
    selector: 'my-app',
    template: `<h1>Component Router</h1>
    <nav>
      <a [routerLink]="['CrisisCenter']">Crisis Center</a>
    </nav>
    <router-outlet></router-outlet>
    `,
    directives:[ROUTER_DIRECTIVES]
})

@RouteConfig([

  {
    path: '/crisis-center/...',
    name: 'CrisisCenter',
    component: CrisisCenterComponent,
    useAsDefault: true
  },
  {path: '/disaster', name: 'Asteroid', redirectTo: ['CrisisCenter', 'CrisisDetail', {id:3}]}
])
export class AppComponent { }
