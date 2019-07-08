import { Component, OnInit } from "@angular/core";

import { Product } from '~/app/core/models/product.model';
import { LoggingService } from '~/app/core/services/loggin.service';
import { Store } from '~/app/core/state/app-store';
import { ProductService } from '../../services/product.service';
import { switchMap } from 'rxjs/operators';
import { PageRoute } from 'nativescript-angular/router';

@Component({
    selector: "ns-products-page",
    templateUrl: "./products-page.component.html",
    styleUrls: ["./products-page.component.css"],
    moduleId: module.id
})
export class ProductsPageComponent implements OnInit {
    public products$ = this.store.select<Product[]>('products');

    constructor(
        private readonly pageRoute: PageRoute,
        private readonly loggingService: LoggingService,
        private readonly store: Store,
        private readonly productService: ProductService) {}

    public ngOnInit() {
        this.pageRoute.activatedRoute
            .forEach(params => {
                console.log(params);
            })
        this.productService.fetchProductsList();
    }

    public listItemTap(event) {
        this.loggingService.log(event);
    }
}
