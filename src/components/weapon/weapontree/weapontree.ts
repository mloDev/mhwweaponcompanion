import {Component, Input, ViewEncapsulation} from '@angular/core';
import * as d3 from "d3";
import {NavController} from "ionic-angular";
import {WeapondetailsPage} from "../../../pages/weapondetail/weapondetails";
import {WeaponModel} from "../model/weapon.model";

/**
 * Generated class for the WeapontreeComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'weapontree',
  templateUrl: 'weapontree.html',
  encapsulation: ViewEncapsulation.None
})
export class WeapontreeComponent {

  @Input() private weaponTree: Array<any>;

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    console.log(this.weaponTree)
  }

  ngOnChanges() {
  }


  handleSelected(event) {
    let weapon: WeaponModel = event.node;
    this.navCtrl.push(WeapondetailsPage, {
      weapon: event.node.node
    });
    console.log(event)
  }


}
