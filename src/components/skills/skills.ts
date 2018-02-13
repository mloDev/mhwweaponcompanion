import {Component, Input} from '@angular/core';

@Component({
  selector: 'skills',
  templateUrl: 'skills.html'
})
export class SkillsComponent {

  @Input()
  private skills: any[] = [];

  constructor() {
  }

}
