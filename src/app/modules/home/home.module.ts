import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { HomePageComponent } from "./home-page/home-page.component";
import { SharedModule } from '~/app/shared/shared.module';

@NgModule({
    declarations: [HomePageComponent],
    imports: [NativeScriptCommonModule, SharedModule],
    exports: [HomePageComponent],
    schemas: [NO_ERRORS_SCHEMA]
})
export class HomeModule {}
