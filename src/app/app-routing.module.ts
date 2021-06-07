import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './SharedProviders/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'stores',
    loadChildren: () => import('./pages/stores/stores.module').then(m => m.StoresPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'stores-map',
    loadChildren: () => import('./pages/stores-map/stores-map.module').then( m => m.StoresMapPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'product-description',
    loadChildren: () => import('./pages/product-description/product-description.module').then( m => m.ProductDescriptionPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'signup',
    loadChildren: () => import('./auth/signup/signup.module').then( m => m.SignupPageModule),
    // canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/login/login.module').then( m => m.LoginPageModule),
    // canActivate: [AuthGuard]
  },
  {
    path: '',
    children: [
      {
        path: 'home',
        children : [
          {
            path: '',
            loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule),
            canActivate: [AuthGuard]
          }
        ]
      },{
        path: 'category',
        children : [
          {
            path: '',
            loadChildren: () => import('./pages/category/category.module').then( m => m.CategoryPageModule),
            canActivate: [AuthGuard]
          }
        ]
      },{
        path: 'user',
        children : [
          {
            path: '',
            loadChildren: () => import('./pages/user/user.module').then( m => m.UserPageModule),
            canActivate: [AuthGuard]
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
