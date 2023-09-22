import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/tabs/account',
    pathMatch: 'full',
  },
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path:'account',
        loadChildren: ()=> import('../avatar/avatar-routing.module').then(m => m.AvatarPageRoutingModule)
      },
      {
        path:'contact',
        loadChildren: ()=> import('../list/list-routing.module').then(m => m.ListPageRoutingModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('../infinit/infinit-routing.module').then(m => m.InfinitPageRoutingModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
