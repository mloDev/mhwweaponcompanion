import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {WeaponselectPage} from "./weaponselect";
import {ComponentsModule} from "../../components/components.module";

@NgModule({
  declarations: [
    WeaponselectPage,
  ],
  imports: [
    IonicPageModule.forChild(WeaponselectPage),
    ComponentsModule
  ],
})
export class WeaponselectPageModule {}
