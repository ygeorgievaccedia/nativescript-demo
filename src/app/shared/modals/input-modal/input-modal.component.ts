import { Component, OnInit } from "@angular/core";
import { ModalDialogParams } from 'nativescript-angular';
import { Page } from 'tns-core-modules/ui/page/page';
import { ModalComponentBase } from '../modal-component-base';

@Component({
    selector: "ns-input-modal",
    templateUrl: "./input-modal.component.html",
    styleUrls: ["./input-modal.component.css"],
    moduleId: module.id
})
export class InputModalComponent extends ModalComponentBase<string, string> {
    public name: string;

    constructor(params: ModalDialogParams, page: Page) {
        super(params, page);
    }

    public onSaveTap() {
        this.closeCallback(this.name);
    }

    public onCancelTap() {
        this.closeCallback(this.modalContext.defaultResult);
    }
}
