import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalSintomasPage } from './modal-sintomas.page';

const routes: Routes = [
  {
    path: '',
    component: ModalSintomasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalSintomasPageRoutingModule {}
