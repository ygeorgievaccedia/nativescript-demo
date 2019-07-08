import { Injectable } from "@angular/core";
import { CanActivate, CanLoad } from "@angular/router";
import { AuthService } from './auth.service';
import { NavigationService } from './navigation.service';

@Injectable({
    providedIn: "root"
})
export class AuthGuard implements CanActivate, CanLoad {
    constructor(
        private readonly authService: AuthService,
        private readonly navigationService: NavigationService) {}

    public canActivate(): boolean {
        if (this.authService.isLoggedIn()) {
            return true;
        } else {
            this.navigationService.navigate(["/auth", "login"], {
                clearHistory: true
            })
            return false;
        }
    }

    public canLoad(): boolean {
        return false;
    }
}
