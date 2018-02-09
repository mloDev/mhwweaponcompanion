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
  private buildPathWeapons;

  constructor(private navParams: NavParams, private http: HttpClient) {
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

    });
    console.log(this.weapon.buildPath);
  }

  findRecursivly() {

  }

  ngOnInit() {
  }

}
