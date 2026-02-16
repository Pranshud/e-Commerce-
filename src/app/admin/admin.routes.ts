import { Routes } from '@angular/router';


export const ADMIN_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./admin-layout/admin-layout.component')
        .then(m => m.AdminLayoutComponent),
    children: [

      {
        path: 'products',
        loadComponent: () =>
          import('./products/product-list.component')
            .then(m => m.ProductListComponent)
      },

      {
        path: 'products/add',
        loadComponent: () =>
          import('./products/product-form.component')
            .then(m => m.ProductFormComponent)
      },

      {
        path: 'products/edit/:id',
        loadComponent: () =>
          import('./products/product-form.component')
            .then(m => m.ProductFormComponent)
      },

      {
        path: 'categories',
        loadComponent: () =>
          import('./categories/category-list.component')
            .then(m => m.CategoryListComponent)
      },

      {
        path: 'inventory',
        loadComponent: () =>
          import('./products/inventory/inventory.component')
            .then(m => m.InventoryComponent)
      },

      {
        path: 'bulk-upload',
        loadComponent: () =>
          import('./products/bulk-upload.component')
            .then(m => m.BulkUploadComponent)
      },
      {
        path: '',
        redirectTo: 'products',
        pathMatch: 'full'
      }
    ]
  }
];