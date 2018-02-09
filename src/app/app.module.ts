import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {ComponentsModule} from "../components/components.module";
import {HttpClientModule} from "@angular/common/http";
import {WeapondetailsPage} from "../pages/weapondetail/weapondetails";
import {WeapontreeUtils} from "../components/weapon/weapontree/weapontreeUtils";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    WeapondetailsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ComponentsModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    WeapondetailsPage
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
