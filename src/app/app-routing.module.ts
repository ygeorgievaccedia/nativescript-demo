import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { ProductsPageComponent } from './modules/products/pages/products-page/products-page.component';

const routes: Routes = [
    { path: "", redirectTo: "/products", pathMatch: "full" },
    { path: "products", component: ProductsPageComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
