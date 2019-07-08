import { Injectable } from "@angular/core";
import { RouterExtensions } from 'nativescript-angular/router';
import { NavigationOptions } from 'nativescript-angular/router/ns-location-strategy';
import { NavigationExtras } from '@angular/router';

@Injectable({
    providedIn: "root"
})
export class NavigationService {
    constructor(private readonly routerExtensions: RouterExtensions) {}

    public navigate(commands: any[], extras?: NavigationExtras & NavigationOptions) {
        return this.routerExtensions.navigate(commands, extras);
    }

    public back() {
        this.routerExtensions.back();
    }

    public backToPreviousPage() {
        this.routerExtensions.backToPreviousPage();
    }
}
