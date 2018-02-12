import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {TreePage} from "./tree";
import {WeapontreeComponent} from "../../components/weapon/weapontree/weapontree";
import {ComponentsModule} from "../../components/components.module";

@NgModule({
  declarations: [
    TreePage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(TreePage),
  ],
})
export class TreePageModule {
}
