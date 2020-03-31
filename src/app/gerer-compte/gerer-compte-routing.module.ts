import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GererComptePage } from './gerer-compte.page';

const routes: Routes = [
  {
    path: '',
    component: GererComptePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GererComptePageRoutingModule {}
