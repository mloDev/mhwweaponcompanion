import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ArmorselectPage } from './armorselect';
import {ComponentsModule} from "../../components/components.module";

@NgModule({
  declarations: [
    ArmorselectPage
  ],
  imports: [
    IonicPageModule.forChild(ArmorselectPage),
    ComponentsModule
  ],
})
export class ArmorselectPageModule {}
