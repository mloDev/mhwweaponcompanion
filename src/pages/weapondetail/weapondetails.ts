import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {WeaponModel} from "../../components/weapon/model/weapon.model";
import {HttpClient} from "@angular/common/http";
import {MaterialModel} from "../../components/weapon/model/material.model";
import {WeapontreeUtils} from "../../components/weapon/weapontree/weapontreeUtils";
import 'rxjs/add/operator/map';
import * as _ from 'underscore/underscore'
import {BuildviewPage} from "../buildview/buildview";

@Component({
  selector: 'weapondetails',
  templateUrl: 'weapondetails.html'
})
export class WeapondetailsPage {

  private weapon: WeaponModel;
  private weaponType: any;
  private buildPathWeapons: WeaponModel[] = [];

  constructor(public navCtrl: NavController, private navParams: NavParams, private http: HttpClient, public weapontreeUtils: WeapontreeUtils) {
    this.weapon = navParams.get('weapon');
    this.weaponType = navParams.get('weaponType');
    console.log(this.weapon.affinity)
    this.appendMaterialInfos([this.weapon]).subscribe();
    this.resolveBuildPath();
  }

  appendMaterialInfos(weapons: WeaponModel[]) {
    return this.http.get<MaterialModel[]>('assets/material.json').map(data => {
      let mats: MaterialModel[] = data;
      for (let weapon of weapons) {
        let mat = weapon.materials;
        mat.map(mat => {
          let foundmat = mats.find( d => d.id === mat.materialId);
          if (foundmat) {
            mat.name = foundmat.name;
            mat.sourceId = foundmat.sourceId;
          }
        });
      }
    });
  }

  resolveBuildPath() {
    this.http.get<WeaponModel[]>('assets/weapons/' + this.weaponType.jsonfile ).subscribe(data => {
      this.findRoot(this.weapon, data);
      this.buildPathWeapons.reverse();
    });
  }

  findRoot(weapon: WeaponModel, data: WeaponModel[]) {
    let foundweapon = weapon;
    this.buildPathWeapons.push(foundweapon);
    if (weapon.parent != null) {
      foundweapon = data.find(d => d.id === weapon.parent);
      if (foundweapon) {
        return this.findRoot(foundweapon, data);
      }
    } else {
      return foundweapon;
    }
  }

  calcMaterial(weapons: WeaponModel[]) {
    let mats: any[] = [];
    this.appendMaterialInfos(weapons).subscribe(result => {
      for (let weapon of weapons) {
        mats.push(weapon.materials);
      }
      mats = [].concat.apply([], mats);
      let plainMatList = _.chain(mats)
          .groupBy('materialId')
          .map(function(mats, key) {
            console.log(mats[0].name)
            return {
              name: mats[0].name,
              sourceId: mats[0].sourceId,
              count: _(mats).reduce(function(m,x) {
                return m + x.count;
              }, 0)
            };
          }).value();
      this.navCtrl.push(BuildviewPage, {matList: plainMatList, weapon: this.weapon});
    });
  }


  ngOnInit() {
  }

}
