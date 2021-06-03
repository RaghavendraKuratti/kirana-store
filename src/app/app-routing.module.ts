import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'stores',
    loadChildren: () => import('./pages/stores/stores.module').then(m => m.StoresPageModule)
  },
  {
    path: 'stores-map',
    loadChildren: () => import('./pages/stores-map/stores-map.module').then( m => m.StoresMapPageModule)
  },
  {
    path: 'product-description',
    loadChildren: () => import('./pages/product-description/product-description.module').then( m => m.ProductDescriptionPageModule)
  },
  {
    path: '',
    children: [
      {
        path: 'home',
        children : [
          {
            path: '',
            loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
          }
        ]
      },{
        path: 'category',
        children : [
          {
            path: '',
            loadChildren: () => import('./pages/category/category.module').then( m => m.CategoryPageModule)
          }
        ]
      },{
        path: 'user',
        children : [
          {
            path: '',
            loadChildren: () => import('./pages/user/user.module').then( m => m.UserPageModule)
          }
        ]
      },
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
