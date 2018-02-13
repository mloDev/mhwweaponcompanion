import { NgModule } from '@angular/core';
import {TreeModule} from "ng2-tree";
import {WeapontreeComponent} from "./weapon/weapontree/weapontree";
import { LoadoutComponent } from './loadout/loadout';
import { StatsComponent } from './stats/stats';
import { SkillsComponent } from './skills/skills';
@NgModule({
	declarations: [WeapontreeComponent,
    LoadoutComponent,
    StatsComponent,
    SkillsComponent],
	imports: [TreeModule],
	exports: [WeapontreeComponent,
    LoadoutComponent,
    StatsComponent,
    SkillsComponent],
  providers: []
})
export class ComponentsModule {}
