import { Injectable } from "@angular/core";
import { ProductRepository } from '../repositories/product.repository';
import { Store } from '~/app/core/state/app-store';
import { ServerHandlerService } from '~/app/core/services/server-error-handler.service';

@Injectable()
export class ProductService {
    constructor(
        private readonly repository: ProductRepository,
        private readonly store: Store,
        private readonly errorHandler: ServerHandlerService) {}

    public fetchProductsList() {
        this.repository.getProductsList(this.errorHandler.handleHttpError, (response: Response) => {
            // update store
            const data = response.json();
            this.store.set("products", data);
        })
    }

    public fetchProductDetails(productId) {
        this.repository.getProductDetails(productId, this.errorHandler.handleHttpError, (response: Response) => {
            const data = response.json();
            this.store.set("selectedProduct", data);
        })
    }
}
