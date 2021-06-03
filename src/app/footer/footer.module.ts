import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FooterService } from './footer.service';
import { TabsComponent } from './tabs/tabs.component';

const components = [
  TabsComponent
];

@NgModule({
  declarations: [components],
  imports: [CommonModule, IonicModule],
  providers: [FooterService],
  exports: [components],
})

export class FooterModule {}
