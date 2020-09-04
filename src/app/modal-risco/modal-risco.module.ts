import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalRiscoPageRoutingModule } from './modal-risco-routing.module';

import { ModalRiscoPage } from './modal-risco.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalRiscoPageRoutingModule
  ],
  declarations: [ModalRiscoPage]
})
export class ModalRiscoPageModule {}
