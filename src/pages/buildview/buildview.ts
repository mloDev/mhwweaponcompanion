import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HttpClient} from "@angular/common/http";
import {SourceModel} from "../../components/weapon/model/source.model";
import * as _ from 'underscore/underscore'
import {WeaponModel} from "../../components/weapon/model/weapon.model";

@IonicPage()
@Component({
  selector: 'page-buildview',
  templateUrl: 'buildview.html',
})
export class BuildviewPage {

  private weapon: WeaponModel;
  private matList: any[];
  private hunts: any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpClient) {
    this.weapon = navParams.get('weapon');
    this.matList = navParams.get('matList');
    this.calcHunts().subscribe();
  }

  calcHunts() {
    return this.http.get<SourceModel[]>('assets/source.json').map(data => {
      for (let mat of this.matList) {
        this.hunts.push(data.find(d => d.id === mat.sourceId));
      }
      this.hunts = _.without(this.hunts, _.findWhere(this.hunts, {name: null}));
    });
  }

  ionViewDidLoad() {
  }

}
