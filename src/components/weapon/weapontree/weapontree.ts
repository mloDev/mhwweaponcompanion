import {Component, Input, ViewEncapsulation} from '@angular/core';
import {NavController, NavParams} from "ionic-angular";
import {WeapondetailsPage} from "../../../pages/weapondetail/weapondetails";

@Component({
  selector: 'weapontree',
  templateUrl: 'weapontree.html',
  encapsulation: ViewEncapsulation.None
})
export class WeapontreeComponent {

  @Input() private weaponTree: Array<any>;
  @Input() private weaponType: any;

  constructor(private navCtrl: NavController, private navParams: NavParams) {
  }

  handleSelected(event) {
    this.navCtrl.push(WeapondetailsPage, {
      weapon: event.node.node,
      weaponType: this.weaponType
    });
  }


}
