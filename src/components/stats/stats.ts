import {Component, Input} from '@angular/core';

@Component({
  selector: 'stats',
  templateUrl: 'stats.html'
})
export class StatsComponent {

  @Input()
  private stats: any;

  constructor() {
  }

}
