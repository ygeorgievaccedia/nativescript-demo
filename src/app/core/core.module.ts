import { NgModule, NO_ERRORS_SCHEMA, ErrorHandler } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { CustomErrorHandler } from './helpers/custom-error-handler';

@NgModule({
  declarations: [],
  imports: [
    NativeScriptCommonModule
  ],
  providers: [
    { provide: ErrorHandler, useClass: CustomErrorHandler }
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class CoreModule { }
