import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExhibitPageRoutingModule } from './exhibit-routing.module';

import { ExhibitPage } from './exhibit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExhibitPageRoutingModule
  ],
  declarations: [ExhibitPage]
})
export class ExhibitPageModule {}
