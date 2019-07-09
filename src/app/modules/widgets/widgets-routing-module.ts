import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { WidgetsPageComponent } from './widgets-page/widgets-page.component';

const routes: Routes = [
    { path: "", component: WidgetsPageComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class WidgetsRoutingModule {}
