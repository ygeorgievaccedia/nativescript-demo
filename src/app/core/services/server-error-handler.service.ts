import { Injectable } from '@angular/core';
import { Observable } from 'tns-core-modules/ui/page/page';

@Injectable({
    providedIn: 'root'
})
export class ServerHandlerService {
    public handleHttpError(error: any) {
        throw error.json().error || "Server error";
    }
}
