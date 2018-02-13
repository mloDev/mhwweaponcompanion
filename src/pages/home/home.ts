import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {WeaponselectPage} from "../weaponselect/weaponselect";
import {LoadoutPage} from "../loadout/loadout";

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  gotoWeaponBrowser() {
    this.navCtrl.push(WeaponselectPage);
  }

  gotoNewLoadOut() {
    this.navCtrl.push(LoadoutPage);
  }

  ionViewDidLoad() {
  }

}
