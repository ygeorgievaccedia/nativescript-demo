import { Http } from "@angular/http";
import { Injectable } from '@angular/core';

@Injectable()
export class ProductRepository {
    constructor(private http: Http) {}

    public getProductsList(errorHandler: (error: any) => void, successHandler: (response) => void) {
        // this.http
        //     .get("")
        //     .subscribe(successHandler, errorHandler);
    }

    public getProductDetails(productId, errorHandler: (error: any) => void, successHandler: (response) => void) {
        this.http
            .get(`url/${productId}`)
            .subscribe(successHandler, errorHandler)
    }
}
