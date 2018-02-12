import { NgModule } from '@angular/core';
import {TreeModule} from "ng2-tree";
import {WeapontreeComponent} from "./weapon/weapontree/weapontree";
@NgModule({
	declarations: [WeapontreeComponent],
	imports: [TreeModule],
	exports: [WeapontreeComponent],
  providers: []
})
export class ComponentsModule {}
