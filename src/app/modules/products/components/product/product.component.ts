import { Component,  Input, ChangeDetectionStrategy } from "@angular/core";

import { Product } from "~/app/core/models/product.model";

@Component({
    selector: "ns-product",
    templateUrl: "./product.component.html",
    styleUrls: ["./product.component.css"],
    moduleId: module.id,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent {
    @Input() product: Product;
}
