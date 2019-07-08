import { ErrorHandler, Injector } from "@angular/core";
import { LoggingService } from "../services/loggin.service";

export class CustomErrorHandler implements ErrorHandler {
    constructor(private readonly inject: Injector) {}

    public handleError(error) {
        const loggerService = this.inject.get(LoggingService);
        const message = error.message ? error.message : error.toString();
        loggerService.error(message);

        throw error;
    }
}
