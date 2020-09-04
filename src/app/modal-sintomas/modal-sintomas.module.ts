import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalSintomasPageRoutingModule } from './modal-sintomas-routing.module';

import { ModalSintomasPage } from './modal-sintomas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalSintomasPageRoutingModule
  ],
  declarations: [ModalSintomasPage]
})
export class ModalSintomasPageModule {}
