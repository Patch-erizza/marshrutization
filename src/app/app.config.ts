import { ApplicationConfig } from '@angular/core';
import {provideRouter, Routes} from '@angular/router';

import { routes } from './app.routes';
import {HomeComponent} from "./home.component";
import {AppComponent} from "./app.component";
import {NotFoundComponent} from "./not-found.component";
import {AboutComponent} from "./about.component";
import {ItemComponent} from "./item.component";
import {ItemDetailsComponent} from "./item.details.component";
import {ItemStatComponent} from "./item.stat.component";

const itemRoutes: Routes = [
  { path: "details", component: ItemDetailsComponent},
  { path: "stat", component: ItemStatComponent},
];

const appRoutes: Routes =[
  { path: "", component: HomeComponent},
  { path: "item/:id", component: ItemComponent},
  { path: "item/:id", component: ItemComponent, children: itemRoutes}
];
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(appRoutes)]
};
