import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SlidesSwiperPageRoutingModule } from './slides-swiper-routing.module';

import { SlidesSwiperPage } from './slides-swiper.page';
import { CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SlidesSwiperPageRoutingModule
  ],
  declarations: [SlidesSwiperPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SlidesSwiperPageModule {}
