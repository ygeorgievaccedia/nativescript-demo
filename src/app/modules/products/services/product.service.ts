import { Injectable } from "@angular/core";
import { ProductRepository } from '../repositories/product.repository';
import { Store } from '~/app/core/state/app-store';
import { ServerHandlerService } from '~/app/core/services/server-error-handler.service';
import { Product } from '~/app/core/models/product.model';

@Injectable()
export class ProductService {
    constructor(
        private readonly repository: ProductRepository,
        private readonly store: Store,
        private readonly errorHandler: ServerHandlerService) {}

    public fetchProductsList() {
        this.repository.getProductsList(this.errorHandler.handleHttpError, (response: Response) => {
            // update store
            // const data = response.json();
            const fakeData = [
                {
                    id: 1,
                    dateCreated: new Date(),
                    dateModified: new Date(),
                    title: "Fake product 1"
                } as Product,
                {
                    id: 2,
                    dateCreated: new Date(),
                    dateModified: new Date(),
                    title: "Fake product 2"
                } as Product,
            ]
            this.store.set("products", fakeData);
        })
    }

    public fetchProductDetails(productId) {
        this.repository.getProductDetails(productId, this.errorHandler.handleHttpError, (response: Response) => {
            const data = response.json();
            this.store.set("selectedProduct", data);
        })
    }
}
