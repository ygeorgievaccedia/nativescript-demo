import { StorageService } from './storage.service';
import { Injectable } from '@angular/core';
import { getString, setString, clear, remove } from "tns-core-modules/application-settings";

@Injectable()
export class StorageNsService extends StorageService {
    constructor() {
        super();
    }

    public setItem<T>(key: string, value: T): void {
        const valueStr = JSON.stringify(value);
        setString(key, valueStr);
    }

    public getItem<T>(key: string): T {
        const valueStr = getString(key);
        if (valueStr) {
            return JSON.parse(valueStr);
        } else {
            return undefined;
        }
    }
    public removeItem(key: string): void {
        remove(key);
    }

    public key(keyIndex: number): string {
        throw new Error('Method not implemented.');
    }

    public clear(): void {
        clear();
    }
}
