import {Component} from '@angular/core';
import {Events, IonicPage, NavController, NavParams, Platform} from 'ionic-angular';

/**
 * Generated class for the LoadoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-loadout',
  templateUrl: 'loadout.html',
})
export class LoadoutPage {

  viewState: string = "loadout";
  loadout: any = {};
  isAndroid: boolean = false;

  constructor(public events: Events,private platform: Platform, public navCtrl: NavController, public navParams: NavParams) {
    this.isAndroid = platform.is('android');
    this.loadout = {
      weapon: {value: 'Weapon I', id: 1},
      head: {name: 'Head I', id: 1},
      chest: {name: 'Chest I', id: 1},
      arms: {name: 'Arms I', id: 1},
      waist: {name: 'Waist I', id: 1},
      legs: {name: 'Legs I', id: 1},
      charm: {name: 'Charm I', id: 1}
    };
    this.subscribeToAllEvents();
  }

  subscribeToAllEvents() {
    this.events.subscribe('weapon:selected', (eventData) => {
      this.loadout.weapon = eventData;
    })
  }

}
