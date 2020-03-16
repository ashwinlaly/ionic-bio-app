import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GalleryDetailsPage } from './gallery-details.page';

const routes: Routes = [
  {
    path: '',
    component: GalleryDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GalleryDetailsPageRoutingModule {}
