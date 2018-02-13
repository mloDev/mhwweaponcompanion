import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {LoadoutPage} from "../loadout/loadout";
import {WeaponTypeSelectPage} from "../weapontypeselect/weapontypeselect";

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  gotoWeaponBrowser() {
    this.navCtrl.push(WeaponTypeSelectPage);
  }

  gotoNewLoadOut() {
    this.navCtrl.push(LoadoutPage);
  }

  ionViewDidLoad() {
  }

}
