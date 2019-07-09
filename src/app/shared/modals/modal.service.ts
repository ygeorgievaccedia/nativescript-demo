import { Injectable, ViewContainerRef } from '@angular/core';
import { ModalDialogService, ModalDialogOptions } from "nativescript-angular";

import { ModalContext } from '../models/modal-context.model';

@Injectable()
export class ModalService {
    private modalIsShowing = false;

    constructor(private modalService: ModalDialogService) {}

    public createModalContext<T, R>(
        vcRef: ViewContainerRef,
        title: string,
        payLoad: T,
        defaultResult: R = null,
        btnOkText: string = "Done",
        btnCancelText: string = "Cancel"): ModalContext<T, R> {
            return {
                vcRef,
                title,
                payLoad,
                defaultResult,
                btnOkText,
                btnCancelText
            }
    }

    public createModal<T, R> (type: any, context: ModalContext<T, R>): Promise<R> {
        if (this.modalIsShowing) {
            return Promise.reject<R>("A modal dialog is already showing.");
        }

        return new Promise<R>((resolve, reject) => {
            const options: ModalDialogOptions = {
                viewContainerRef: context.vcRef,
                context: context,
                fullscreen: true
            };

            this.modalIsShowing = true;
            this.modalService
                .showModal(type, options)
                .then(result => {
                    resolve(result);
                    this.modalIsShowing = false;
                })
                .catch(err => {
                    reject(err);
                    this.modalIsShowing = false;
                })
        })
    }
}
