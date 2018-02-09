import {Component, Input} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {WeaponModel} from "../../components/weapon/model/weapon.model";

@Component({
  selector: 'weapondetails',
  templateUrl: 'weapondetails.html'
})
export class WeapondetailsPage {

  private weapon: WeaponModel;

  constructor(private navParams: NavParams) {
     this.weapon = navParams.get('weapon');
     console.log(this.weapon);
  }

  ngOnInit() {
  }

  generateData() {
  }

}
