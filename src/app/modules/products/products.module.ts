import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { HttpModule } from "@angular/http";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { ProductListComponent } from "./components/product-list/product-list.component";
import { ProductComponent } from "./components/product/product.component";
import { ProductsPageComponent } from "./pages/products-page/products-page.component";
import { ProductsRoutingModule } from "./products-routing.module";
import { ProductRepository } from "./repositories/product.repository";
import { ProductService } from "./services/product.service";

@NgModule({
    declarations: [
        ProductsPageComponent,
        ProductComponent,
        ProductListComponent
    ],
    imports: [
        NativeScriptCommonModule,
        HttpModule,
        ProductsRoutingModule
    ],
    providers: [
        ProductService,
        ProductRepository
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class ProductsModule {}
