import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Chapter21PageRoutingModule } from './chapter21-routing.module';

import { Chapter21Page } from './chapter21.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Chapter21PageRoutingModule
  ],
  declarations: [Chapter21Page]
})
export class Chapter21PageModule {}
