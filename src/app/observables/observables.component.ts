import { Component } from '@angular/core';
import { filter, interval, map } from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent {
  source = interval(1000).pipe(
    filter((it) => it % 2 == 0),
    map((it) => `Hello world ${it}`)
  );
}
