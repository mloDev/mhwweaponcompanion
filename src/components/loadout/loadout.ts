import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NavController} from "ionic-angular";
import {WeaponTypeSelectPage} from "../../pages/weapontypeselect/weapontypeselect";
import {ArmorselectPage} from "../../pages/armorselect/armorselect";

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

  selectArmor(type) {
    console.log(type)
    this.navCtrl.push(ArmorselectPage, {type: type});
  }

  weaponSelectCallback(weapon) {
    this.loadout.weapon = weapon;
  }

}
