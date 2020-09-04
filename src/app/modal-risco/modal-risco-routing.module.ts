import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalRiscoPage } from './modal-risco.page';

const routes: Routes = [
  {
    path: '',
    component: ModalRiscoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalRiscoPageRoutingModule {}
