import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NavController} from "ionic-angular";
import {WeaponTypeSelectPage} from "../../pages/weapontypeselect/weapontypeselect";

@Component({
  selector: 'loadout',
  templateUrl: 'loadout.html'
})
export class LoadoutComponent {

  @Input()
  private loadout: any;

  constructor(private navCtrl: NavController) {
  }

  selectWeapon() {
    this.navCtrl.push(WeaponTypeSelectPage, {weaponSelectCallback: this.weaponSelectCallback});
  }

  weaponSelectCallback(weapon) {
    console.log(weapon);

    this.loadout.weapon = weapon;
  }

}
