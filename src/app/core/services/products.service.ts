import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable({
    providedIn: "root"
})
export class ProductsService {
    constructor(private readonly http: Http) {}

    public getProducts() {
        this.http.get("").subscribe(data => {
            console.log(data);
        });
    }
}
