import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoadoutPage } from './loadout';
import {ComponentsModule} from "../../components/components.module";

@NgModule({
  declarations: [
    LoadoutPage,
  ],
  imports: [
    IonicPageModule.forChild(LoadoutPage),
    ComponentsModule
  ],
})
export class LoadoutPageModule {}
