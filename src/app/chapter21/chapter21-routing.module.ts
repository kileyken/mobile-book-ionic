import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Chapter21Page } from './chapter21.page';

const routes: Routes = [
  {
    path: '',
    component: Chapter21Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Chapter21PageRoutingModule {}
