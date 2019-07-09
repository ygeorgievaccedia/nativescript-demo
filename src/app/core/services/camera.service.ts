import { Injectable } from "@angular/core";
import { ImageAsset } from "tns-core-modules/image-asset";
import * as camera from "nativescript-camera";
import { LoggingService } from "./loggin.service";

@Injectable({
    providedIn: "root"
})
export class CameraService {
    constructor(private readonly loggerService: LoggingService) {}

    public async takePircture(): Promise<ImageAsset> {
        try {
            await camera.requestCameraPermissions();
            const cameraOptions = { width: 300, height: 300, keepAspectRatio: false, saveToGallery: true } as camera.CameraOptions;

            try {
                const imageAsset = await camera.takePicture(cameraOptions);

                return imageAsset;
            } catch (error) {
                this.loggerService.error("Error -> " + error.message);
            }
        } catch {
            this.loggerService.error("Camera permissions rejected");
        }
    }
}
