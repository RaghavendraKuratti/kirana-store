import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StoresMapPage } from './stores-map.page';

const routes: Routes = [
  {
    path: '',
    component: StoresMapPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoresMapPageRoutingModule {}
