import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MainPageRoutingModule } from './main.router.module';

import { MainPage } from './main.page';
import { MainToolbarComponent } from '../components/maintoolbar/maintoolbar';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    MainPageRoutingModule
  ],
  declarations: [MainPage, MainToolbarComponent]
})
export class MainPageModule {}
