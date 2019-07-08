import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter } from "@angular/core";

import { Product } from "~/app/core/models/product.model";

@Component({
    selector: "ns-product-list",
    templateUrl: "./product-list.component.html",
    styleUrls: ["./product-list.component.css"],
    moduleId: module.id,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent {
    @Input() products: Product[];

    @Output() itemTap: EventEmitter<any> = new EventEmitter<any>();

    public onListItemTap(event) {
        this.itemTap.emit(event);
    }
}
