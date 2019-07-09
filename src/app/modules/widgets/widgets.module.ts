import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { WidgetsPageComponent } from './widgets-page/widgets-page.component';
import { WidgetsRoutingModule } from './widgets-routing-module';

@NgModule({
  declarations: [WidgetsPageComponent],
  imports: [
    NativeScriptCommonModule,
    WidgetsRoutingModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class WidgetsModule { }
