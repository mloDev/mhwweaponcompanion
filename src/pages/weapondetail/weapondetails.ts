import {Component, Input} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {WeaponModel} from "../../components/weapon/model/weapon.model";
import {HttpClient} from "@angular/common/http";
import {MaterialModel} from "../../components/weapon/model/material.model";
import {WeapontreeUtils} from "../../components/weapon/weapontree/weapontreeUtils";

@Component({
  selector: 'weapondetails',
  templateUrl: 'weapondetails.html'
})
export class WeapondetailsPage {

  private weapon: WeaponModel;
  private buildPathWeapons: WeaponModel[] = [];

  constructor(private navParams: NavParams, private http: HttpClient, public weapontreeUtils: WeapontreeUtils) {
    this.weapon = navParams.get('weapon');
    this.appendMaterialInfos();
    this.resolveBuildPath();
  }

  appendMaterialInfos() {
    let mat = this.weapon.materials;
    this.http.get<MaterialModel[]>('assets/material.json').subscribe(data => {
      let mats: MaterialModel[] = data;
      mat.map(mat => {
          let foundmat = mats.find( d => d.id === mat.materialId);
          if (foundmat) {
            mat.name = foundmat.name;
            mat.sourceId = foundmat.sourceId;
          }
      })
    });
  }

  resolveBuildPath() {
    this.http.get<WeaponModel[]>('assets/bow.json').subscribe(data => {
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


  ngOnInit() {
  }

}
