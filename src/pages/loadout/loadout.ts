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
  private stats: any;

  constructor(public events: Events, private platform: Platform, public navCtrl: NavController, public navParams: NavParams) {
    this.isAndroid = platform.is('android');
    this.loadout = {
      weapon: {value: 'Weapon I', id: 1},
      head: {
        name: 'Head I', id: 1, skills: [], "fire": 1,
        "ice": 14,
        "thunder": -3,
        "water": 0,
        "dragon": 0,
        "defense": 70
      },
      chest: {
        name: 'Chest I', id: 1, skills: [],
        "fire": 1,
        "ice": 14,
        "thunder": -3,
        "water": 0,
        "dragon": 0,
        "defense": 70
      },
      arms: {
        name: 'Arms I', id: 1, skills: [],
        "fire": 1,
        "ice": 14,
        "thunder": -3,
        "water": 0,
        "dragon": 0,
        "defense": 70
      },
      waist: {
        name: 'Waist I', id: 1, skills: [],
        "fire": 1,
        "ice": 14,
        "thunder": -3,
        "water": 0,
        "dragon": 0,
        "defense": 70
      },
      legs: {
        name: 'Legs I', id: 1, skills: [],
        "fire": 1,
        "ice": 14,
        "thunder": -3,
        "water": 0,
        "dragon": 0,
        "defense": 70
      },
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
    this.skills = _.chain(this.skills).groupBy('skillId').map(function (skills, key) {
      return {
        name: skills[0].name,
        skillId: skills[0].skillId,
        level: _(skills).reduce(function (m, x) {
          return m + x.level;
        }, 0)
      }
    }).value();
  }

  calcStats() {
    this.stats =
      {
        attack: this.loadout.weapon.attack,
        defense: this.calcSingleStat('defense'),
        fire: this.calcSingleStat('fire'),
        ice: this.calcSingleStat('ice'),
        thunder: this.calcSingleStat('thunder'),
        dragon: this.calcSingleStat('dragon'),
        water: this.calcSingleStat('water')
      };
    console.log(this.stats)
  }

  calcSingleStat(type) {
    return this.loadout.chest[type]
      + this.loadout.head[type]
      + this.loadout.arms[type]
      + this.loadout.legs[type]
      + this.loadout.waist[type];
  }
}
