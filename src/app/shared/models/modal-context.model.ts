import { ViewContainerRef } from '@angular/core';

export interface ModalContext<T, R> {
    vcRef: ViewContainerRef,
    title: string,
    payLoad: T,
    defaultResult: R,
    btnOkText: string,
    btnCancelText: string
}
