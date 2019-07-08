import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { AuthContainerComponent } from "./containers/auth-container/auth-container.component";
import { LoginPageComponent } from "./pages/login-page/login-page.component";
import { RegisterPageComponent } from "./pages/register-page/register-page.component";
import { NativeScriptRouterModule } from "nativescript-angular/router";

const routes: Routes = [
    {
        path: "auth",
        component: AuthContainerComponent,
        children: [
            {
                path: "login",
                component: LoginPageComponent
            },
            {
                path: "register",
                component: RegisterPageComponent
            }
        ]
    }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class AuthRoutingModule {}
