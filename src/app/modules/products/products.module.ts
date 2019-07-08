import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';

import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { ProductService } from './services/product.service';
import { ProductRepository } from './repositories/product.repository';
import { ProductComponent } from './components/product/product.component';
import { HttpModule } from '@angular/http';
import { ProductListComponent } from './components/product-list/product-list.component';

@NgModule({
  declarations: [ProductsPageComponent, ProductComponent, ProductListComponent],
  imports: [
    NativeScriptCommonModule,
    HttpModule
  ],
  providers: [ProductService, ProductRepository],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ProductsModule { }
