import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {HttpClient} from "@angular/common/http";
import {WeaponModel} from "../../components/weapon/model/weapon.model";
import {WeapontreeUtils} from "../../components/weapon/weapontree/weapontreeUtils";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public weaponTree: WeaponModel[] = [];

  constructor(public navCtrl: NavController, private http: HttpClient, public weapontreeUtils: WeapontreeUtils) {

  }

  ngOnInit() {
    this.http.get<WeaponModel[]>('assets/bow.json').subscribe(data => {
      this.weaponTree = this.weapontreeUtils.generateTree(data)
    });
  }



}
