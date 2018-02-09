import {Injectable} from "@angular/core";
import {WeaponModel} from "../model/weapon.model";

@Injectable()
export class WeapontreeUtils {
  generateTree(data: WeaponModel[]) {
    let weaponTree: WeaponModel[] = [];
    data.forEach(d => {
      if (d.parent == null) {
        weaponTree.push(d);
        this.resolveChildren(d, data)
      }
    });
    return weaponTree;
  }

  resolveChildren(d, data) {
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
