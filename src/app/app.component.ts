import { Component } from '@angular/core';
import {Router, RouterLink, RouterOutlet} from '@angular/router';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, FormsModule],
  styles: `a {padding: 10px;
  font-size: 25px;
  color: black;
  font-family: arial;}
  a:hover {color: blue;
  cursor: pointer;}`,
  template: `<div>
    <nav>
      <a routerLink="">Главная</a>
      <a routerLink="/item/5/details">Информация о товаре</a>
      <a routerLink="/item/5/stat">Статистика товара</a>
    </nav>
    <router-outlet></router-outlet>
  </div>`,
})

export class AppComponent {
}
