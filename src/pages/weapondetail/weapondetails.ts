import {Component, Input} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {WeaponModel} from "../../components/weapon/model/weapon.model";
import {HttpClient} from "@angular/common/http";
import {MaterialModel} from "../../components/weapon/model/material.model";

@Component({
  selector: 'weapondetails',
  templateUrl: 'weapondetails.html'
})
export class WeapondetailsPage {

  private weapon: WeaponModel;

  constructor(private navParams: NavParams, private http: HttpClient) {
    this.weapon = navParams.get('weapon');
    this.appendMaterialInfos();
    console.log(this.weapon)

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

  ngOnInit() {
  }

}
