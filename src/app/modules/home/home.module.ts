import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { HomePageComponent } from "./home-page/home-page.component";

@NgModule({
    declarations: [HomePageComponent],
    imports: [NativeScriptCommonModule],
    exports: [HomePageComponent],
    schemas: [NO_ERRORS_SCHEMA]
})
export class HomeModule {}
