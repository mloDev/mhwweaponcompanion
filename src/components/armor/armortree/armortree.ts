import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Events, NavController, NavParams} from "ionic-angular";

@Component({
  selector: 'armortree',
  templateUrl: 'armortree.html'
})
export class ArmortreeComponent {

  private armors: any[] = [];

  constructor(private events: Events, private http: HttpClient, private navParams: NavParams, private navCtrl: NavController) {
    this.loadArmorForType(this.navParams.get('type'));
  }

  loadArmorForType(type) {
    this.http.get<any[]>('assets/armor/' + type + ".json").subscribe(data => {
      this.armors = data;
    })
  }

  selectArmor(armor) {
    this.events.publish(this.navParams.get('type') + ':selected', armor);
    this.navCtrl.pop();
  }

}
