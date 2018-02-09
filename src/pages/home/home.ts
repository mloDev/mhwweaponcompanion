import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {HttpClient} from "@angular/common/http";
import {WeaponModel} from "../../components/weapon/model/weapon.model";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public weaponTree: WeaponModel[] = [];

  constructor(public navCtrl: NavController, private http: HttpClient) {

  }

  ngOnInit() {
    this.http.get<WeaponModel[]>('assets/bow.json').subscribe(data => {
      this.weaponTree = data;
    });
  }

  generateData() {
  }

}
