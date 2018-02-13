import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';

import {MyApp} from './app.component';
import {ComponentsModule} from "../components/components.module";
import {HttpClientModule} from "@angular/common/http";
import {WeapondetailsPage} from "../pages/weapondetail/weapondetails";
import {WeapontreeUtils} from "../components/weapon/weapontree/weapontreeUtils";
import {BuildviewPage} from "../pages/buildview/buildview";
import {BuildviewPageModule} from "../pages/buildview/buildview.module";
import {TreePage} from "../pages/tree/tree";
import {TreePageModule} from "../pages/tree/tree.module";
import {HomePageModule} from "../pages/home/home.module";
import {WeaponselectPageModule} from "../pages/weaponselect/weaponselect.module";
import {LoadoutPageModule} from "../pages/loadout/loadout.module";
import {LoadoutPage} from "../pages/loadout/loadout";

@NgModule({
  declarations: [
    MyApp,
    WeapondetailsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ComponentsModule,
    HttpClientModule,
    BuildviewPageModule,
    HomePageModule,
    WeaponselectPageModule,
    TreePageModule,
    LoadoutPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WeapondetailsPage,
    BuildviewPage,
    TreePage,
    LoadoutPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    WeapontreeUtils,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
}
