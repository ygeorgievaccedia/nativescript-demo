import { ModalContext } from '../models/modal-context.model';
import { ModalDialogParams } from 'nativescript-angular';
import { Page } from 'tns-core-modules/ui/page/page';

export class ModalComponentBase<T, R> {
    protected modalContext: ModalContext<T, R>;
    protected closeCallback: (...args: any[]) => any;

    public get title() {
        return this.modalContext.title;
    }

    public get payload() {
        return this.modalContext.payLoad;
    }

    public get btnOkText() {
        return this.modalContext.btnOkText;
    }

    public get btnCancelText() {
        return this.modalContext.btnCancelText;
    }

    constructor(private params: ModalDialogParams, private page: Page) {
        this.modalContext = <ModalContext<T,R>> params.context;
        this.closeCallback = params.closeCallback;

        this.page.on("unloaded", () => {
            this.params.closeCallback(this.modalContext.defaultResult);
        })
    }
}
