import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { LoginPageComponent } from "./pages/login-page/login-page.component";
import { AuthContainerComponent } from "./containers/auth-container/auth-container.component";
import { RegisterPageComponent } from "./pages/register-page/register-page.component";
import { AuthRoutingModule } from "./auth-routing.module";

@NgModule({
    declarations: [LoginPageComponent, AuthContainerComponent, RegisterPageComponent],
    imports: [NativeScriptCommonModule, AuthRoutingModule],
    exports: [LoginPageComponent],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AuthModule {}
