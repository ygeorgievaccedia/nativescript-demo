import { StorageService } from "./storage.service";

export class StorageWebService extends StorageService {
    public setItem<T>(key: string, value: T): void {
        const valueStr = JSON.stringify(value);
        localStorage.setItem(key, valueStr);
    }

    public getItem<T>(key: string): T {
        const valueStr = localStorage.getItem(key);
        if (valueStr) {
            return JSON.parse(valueStr);
        } else {
            return undefined;
        }
    }

    public removeItem(key: string): void {
        localStorage.removeItem(key);
    }

    public key(keyIndex: number): string {
        return localStorage.key(keyIndex);
    }

    public clear(): void {
        localStorage.clear();
    }
}
