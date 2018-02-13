import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {ComponentsModule} from "../../components/components.module";
import {WeaponTypeSelectPage} from "./weapontypeselect";

@NgModule({
  declarations: [
    WeaponTypeSelectPage,
  ],
  imports: [
    IonicPageModule.forChild(WeaponTypeSelectPage),
    ComponentsModule
  ],
})
export class WeaponTypeSelectPageModule {}
