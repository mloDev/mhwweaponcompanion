import {NgModule} from '@angular/core';
import {TreeModule} from "ng2-tree";
import {WeapontreeComponent} from "./weapon/weapontree/weapontree";
import {LoadoutComponent} from './loadout/loadout';
import {StatsComponent} from './stats/stats';
import {FillPipe, SkillsComponent} from './skills/skills';
import {IonicModule} from "ionic-angular";
import { ArmortreeComponent } from './armor/armortree/armortree';

@NgModule({
  declarations: [WeapontreeComponent,
    LoadoutComponent,
    StatsComponent,
    SkillsComponent,
    ArmortreeComponent,
    FillPipe],
  imports: [IonicModule,
    TreeModule],
  exports: [WeapontreeComponent,
    LoadoutComponent,
    StatsComponent,
    SkillsComponent,
    ArmortreeComponent,
    FillPipe],
  providers: []
})
export class ComponentsModule {
}
