import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptFormsModule } from 'nativescript-angular';
import { NativeScriptCommonModule } from 'nativescript-angular/common';

import { InputModalComponent } from './modals/input-modal/input-modal.component';
import { ModalService } from './modals/modal.service';


@NgModule({
  declarations: [InputModalComponent],
  imports: [
    NativeScriptCommonModule,
    NativeScriptFormsModule
  ],
  providers: [ModalService],
  entryComponents: [
      InputModalComponent
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class SharedModule { }
