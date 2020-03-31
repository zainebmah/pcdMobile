import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GererComptePageRoutingModule } from './gerer-compte-routing.module';

import { GererComptePage } from './gerer-compte.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GererComptePageRoutingModule
  ],
  declarations: [GererComptePage]
})
export class GererComptePageModule {}
