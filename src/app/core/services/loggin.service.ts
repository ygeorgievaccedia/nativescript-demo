import { Injectable } from "@angular/core";
import { LogEntry } from "../models/log-entry.model";
import { LoggingLevelEnum } from '../models/enums/logging-level-enum';

@Injectable({
    providedIn: "root"
})
export class LoggingService {
    private logs: LogEntry[] = [];

    public log(message: string) {
        this.logs.push({ message: message, level: LoggingLevelEnum.Log});
        console.log(message);
    }

    public warn(message: string) {
        this.logs.push({message: message, level: LoggingLevelEnum.Warn});
        console.log(message);
    }

    public error(message: string) {
        this.logs.push({message: message, level: LoggingLevelEnum.Error});
    }
}
