import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path :'', redirectTo: 'app', pathMatch:'full'},
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'modal-sintomas',
    loadChildren: () => import('./modal-sintomas/modal-sintomas.module').then( m => m.ModalSintomasPageModule)
  },
  {
    path: 'modal-risco',
    loadChildren: () => import('./modal-risco/modal-risco.module').then( m => m.ModalRiscoPageModule)
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }