import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'ejemplo1',
    loadComponent: () => import('./component/ejemplo1/ejemplo1.component').then( c => c.Ejemplo1Component )
  },
  {
    path: "ejemplo2",
    loadComponent: () => import('./component/ejemplo2/ejemplo2.component').then( c => c.Ejemplo2Component )
  },
  {
    path: "ejemplo3",
    loadComponent: () => import('./component/ejemplo3/ejemplo3.component').then( c => c.Ejemplo3Component )
  },
  {
    path: "ejemplo4",
    loadComponent: () => import('./component/ejemplo4/ejemplo4.component').then( c => c.Ejemplo4Component )
  }
  ,
  {
    path: "ejemplo5",
    loadComponent: () => import('./component/ejemplo5/ejemplo5.component').then( c => c.Ejemplo5Component )
  },
  {
    path: "ejemplo6",
    loadComponent: () => import('./component/ejemplo6/ejemplo6.component').then( c => c.Ejemplo6Component )
  }
];
