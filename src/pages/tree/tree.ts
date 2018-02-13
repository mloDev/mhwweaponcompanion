import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {HttpClient} from "@angular/common/http";
import {WeaponModel} from "../../components/weapon/model/weapon.model";
import {WeapontreeUtils} from "../../components/weapon/weapontree/weapontreeUtils";

@Component({
  selector: 'page-tree',
  templateUrl: 'tree.html'
})
export class TreePage {

  public weaponTree: WeaponModel[] = [];
  private weaponType: any;

  constructor(public navCtrl: NavController, private http: HttpClient, public navParams: NavParams, public weapontreeUtils: WeapontreeUtils) {
    this.weaponType = navParams.get('weaponType');
  }

  ngOnInit() {
    this.http.get<WeaponModel[]>('assets/weapons/' + this.weaponType.jsonfile).subscribe(data => {
      this.weaponTree = this.weapontreeUtils.generateTree(data)
    });
  }
}
