import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SlidesSwiperPage } from './slides-swiper.page';

const routes: Routes = [
  {
    path: '',
    component: SlidesSwiperPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SlidesSwiperPageRoutingModule {}
