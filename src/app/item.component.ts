import {Component} from "@angular/core";
import {ActivatedRoute, Params, RouterOutlet} from "@angular/router";
import {Observable, Subscription} from "rxjs";

@Component({
  selector: "item-info",
  standalone: true,
  imports: [RouterOutlet],
  template: `<h1>Товар {{id}}</h1>
  <router-outlet></router-outlet>`
})

export class ItemComponent {

  // @ts-ignore
  id: number;

  constructor(private route: ActivatedRoute) {
    route.params.subscribe(params => this.id=params["id"]);
  }
}
