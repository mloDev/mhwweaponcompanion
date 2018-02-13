import {Component, Input, Pipe, PipeTransform} from '@angular/core';

@Component({
  selector: 'skills',
  templateUrl: 'skills.html'
})
export class SkillsComponent {

  @Input()
  private skills: any[] = [];
  Arr = Array;
  num:number = 6;

  constructor() {
  }

}

@Pipe({
  name: 'fill'
})
export class FillPipe implements PipeTransform {
  transform(value) {
    return (new Array(value)).fill(1);
  }
}

