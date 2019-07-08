import { Component, OnInit } from "@angular/core";
import { LoggingService } from '~/app/core/services/loggin.service';

@Component({
    selector: "ns-products-page",
    templateUrl: "./products-page.component.html",
    styleUrls: ["./products-page.component.css"],
    moduleId: module.id
})
export class ProductsPageComponent implements OnInit {
    constructor(private readonly loggingService: LoggingService) {}

    ngOnInit() {
        throw Error("Error in ProductsPageComponent");
    }

    public onButtonTap() {
        this.loggingService.log("Loggin Service works");
    }
}
