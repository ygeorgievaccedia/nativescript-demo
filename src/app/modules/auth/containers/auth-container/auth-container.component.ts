import { Component, OnInit } from "@angular/core";
import { Page } from 'tns-core-modules/ui/page';

@Component({
    selector: "ns-auth-container",
    templateUrl: "./auth-container.component.html",
    styleUrls: ["./auth-container.component.css"],
    moduleId: module.id
})
export class AuthContainerComponent implements OnInit {
    constructor(private readonly page: Page) {
        this.page.actionBarHidden = true;
    }

    ngOnInit() {}
}
