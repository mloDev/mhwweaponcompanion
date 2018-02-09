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
      this.generateTree(data)
    });
  }

  generateTree(data: WeaponModel[]) {
    data.forEach(d => {
      if (d.parent == null) {
        this.weaponTree.push(d);
        this.resolveChildren(d, data)
      }
    });
  }

  resolveChildren(d, data) {
    console.log(d);
    if (d.childrenIds) {
      d.children = [];
      d.childrenIds.forEach(childId => {
        let foundchild = data.find(d => d.id === childId);
        if (foundchild.childrenIds) {
          this.resolveChildren(foundchild, data);
        }
        d.children.push(foundchild);
      })
    }
  }

}
