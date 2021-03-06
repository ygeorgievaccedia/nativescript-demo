import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { HomePageComponent } from "./modules/home/home-page/home-page.component";

const routes: Routes = [
    { path: "", redirectTo: "/widgets", pathMatch: "full" },
    { path: "home", component: HomePageComponent },
    { path: "products", loadChildren: "./modules/products/products.module#ProductsModule" },
    { path: "widgets", loadChildren: "./modules/widgets/widgets.module#WidgetsModule" }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule {}
