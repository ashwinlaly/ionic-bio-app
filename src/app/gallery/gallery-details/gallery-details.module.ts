import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GalleryDetailsPageRoutingModule } from './gallery-details-routing.module';

import { GalleryDetailsPage } from './gallery-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GalleryDetailsPageRoutingModule
  ],
  declarations: [GalleryDetailsPage]
})
export class GalleryDetailsPageModule {}
