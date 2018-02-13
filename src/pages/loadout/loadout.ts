import {Component} from '@angular/core';
import {Events, IonicPage, NavController, NavParams, Platform} from 'ionic-angular';
import * as _ from 'underscore/underscore'

@IonicPage()
@Component({
  selector: 'page-loadout',
  templateUrl: 'loadout.html',
})
export class LoadoutPage {

  viewState: string = "loadout";
  loadout: any = {};
  isAndroid: boolean = false;
  private skills: any[];

  constructor(public events: Events, private platform: Platform, public navCtrl: NavController, public navParams: NavParams) {
    this.isAndroid = platform.is('android');
    this.loadout = {
      weapon: {value: 'Weapon I', id: 1},
      head: {name: 'Head I', id: 1, skills: []},
      chest: {name: 'Chest I', id: 1, skills: []},
      arms: {name: 'Arms I', id: 1, skills: []},
      waist: {name: 'Waist I', id: 1, skills: []},
      legs: {name: 'Legs I', id: 1, skills: []},
      charm: {name: 'Charm I', id: 1, skills: []}
    };
    this.subscribeToAllEvents();
  }

  subscribeToAllEvents() {
    this.events.subscribe('weapon:selected', (eventData) => {
      this.loadout.weapon = eventData;
    });
    this.events.subscribe('chests:selected', (eventData) => {
      this.loadout.chest = eventData;
    });
    this.events.subscribe('legs:selected', (eventData) => {
      this.loadout.legs = eventData;
    });
    this.events.subscribe('arms:selected', (eventData) => {
      this.loadout.arms = eventData;
    });
    this.events.subscribe('charms:selected', (eventData) => {
      this.loadout.charm = eventData;
    });
    this.events.subscribe('waits:selected', (eventData) => {
      this.loadout.waist = eventData;
    });
    this.events.subscribe('heads:selected', (eventData) => {
      this.loadout.head = eventData;
    });
  }

  buildSkillList() {
    return [
      ...this.loadout.chest.skills,
      ...this.loadout.head.skills,
      ...this.loadout.charm.skills,
      ...this.loadout.arms.skills,
      ...this.loadout.waist.skills,
      ...this.loadout.legs.skills]
  }

  calcSkills() {
    this.skills = this.buildSkillList();
    this.skills = _.chain(this.skills).groupBy('skillId').map(function(skills, key) {
      return {
        name: skills[0].name,
        skillId: skills[0].skillId,
        level: _(skills).reduce(function(m,x) {
          return m + x.level;
        }, 0)
      }
    }).value();
    console.log(this.skills);
  }

}
