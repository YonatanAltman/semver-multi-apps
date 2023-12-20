import {Route} from '@angular/router';

export const appRoutes: Route[] = [
  {path: '', redirectTo: 'main', pathMatch: 'full'},
  {path: 'main', loadComponent: () => import('@semver-multi-apps/main').then(c => c.MainComponent)}
];
