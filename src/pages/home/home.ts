import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TreePage} from "../tree/tree";

/**
 * Generated class for the TreePage page.
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

  private weaponTypes = [
    {name: 'Great Sword', jsonfile: 'greatswords.json', image: 'greatswords-icon.png'},
    {name: 'Long Sword', jsonfile: 'longswords.json', image: 'longswords-icon.png'},
    {name: 'Sword & Shield', jsonfile: 'sword-shield.json', image: 'sword-shield-icon.png'},
    {name: 'Dual Blades', jsonfile: 'dual-blades.json', image: 'dual-blades-icon.png'},
    {name: 'Hammer', jsonfile: 'hammers.json', image: 'hammers-icon.png'},
    {name: 'Hunting Horn', jsonfile: 'hunting-horns.json', image: 'hunting-horns-icon.png'},
    {name: 'Lance', jsonfile: 'lances.json', image: 'lances-icon.png'},
    {name: 'Gunlance', jsonfile: 'gunlance.json', image: 'gunlance-icon.png'},
    {name: 'Switch Axe', jsonfile: 'switch-axe.json', image: 'switch-axe-icon.png'},
    {name: 'Charge Blade', jsonfile: 'charge-blade.json', image: 'charge-blade-icon.png'},
    {name: 'Insect Glaive', jsonfile: 'insect-glaive.json', image: 'insect-glaive-icon.png'},
    {name: 'Light Bowgun', jsonfile: 'light-bowgun.json', image: 'light-bowgun-icon.png'},
    {name: 'Heavy Bowgun', jsonfile: 'heavy-bowgun.json', image: 'heavy-bowgun-icon.png'},
    {name: 'Bow', jsonfile: 'bow.json', image: 'bow-icon.png'}
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  selectWeaponTree(type: any) {
    this.navCtrl.push(TreePage, {weaponType: type});
  }

  ionViewDidLoad() {
  }

}
