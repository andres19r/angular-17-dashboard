import { Component } from '@angular/core';
import { routes } from '../../app.routes';

@Component({
  selector: 'app-sidemenu',
  standalone: true,
  imports: [],
  templateUrl: './sidemenu.component.html',
  styleUrl: './sidemenu.component.scss',
})
export class SidemenuComponent {
  public menuItems = routes
    .map((route) => route.children ?? [])
    .flat()
    .filter((route) => route && route.path)
    .filter((route) => !route.path?.includes(':'));

  constructor() {
    // const dashboardRoute = routes
    //   .map((route) => route.children ?? [])
    //   .flat()
    //   .filter((route) => route && route.path)
    //   .filter((route) => !route.path?.includes(':'));
    // console.log(dashboardRoute);
  }
}
