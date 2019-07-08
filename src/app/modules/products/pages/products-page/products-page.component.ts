import { Component, OnInit } from "@angular/core";

import { Product } from '~/app/core/models/product.model';
import { LoggingService } from '~/app/core/services/loggin.service';
import { Store } from '~/app/core/state/app-store';
import { ProductService } from '../../services/product.service';
import { take } from 'rxjs/operators';

@Component({
    selector: "ns-products-page",
    templateUrl: "./products-page.component.html",
    styleUrls: ["./products-page.component.css"],
    moduleId: module.id
})
export class ProductsPageComponent implements OnInit {
    public products$ = this.store.select<Product[]>('products');

    constructor(
        private readonly loggingService: LoggingService,
        private readonly store: Store,
        private readonly productService: ProductService) {}

    public ngOnInit() {
        this.productService.fetchProductsList();
    }

    public listItemTap(event) {
        this.loggingService.log(event);
    }
}
