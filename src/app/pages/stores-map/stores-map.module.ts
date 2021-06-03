import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StoresMapPageRoutingModule } from './stores-map-routing.module';

import { StoresMapPage } from './stores-map.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StoresMapPageRoutingModule
  ],
  declarations: [StoresMapPage]
})
export class StoresMapPageModule {}
