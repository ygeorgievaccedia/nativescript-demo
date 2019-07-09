import { Component, ViewContainerRef, OnInit } from "@angular/core";
import { alert, confirm, AlertOptions, ConfirmOptions, prompt, PromptOptions, PromptResult, inputType, login, LoginOptions, LoginResult, action, ActionOptions } from "tns-core-modules/ui/dialogs";
import { LocalNotifications } from "nativescript-local-notifications";
import { TextField } from "tns-core-modules/ui/text-field";
import { StackLayout } from "tns-core-modules/ui/layouts/stack-layout";
import { Label } from "tns-core-modules/ui/label";
import { Button } from "tns-core-modules/ui/button";
import { screen } from "tns-core-modules/platform";
import * as geolocation from "nativescript-geolocation";
import { Accuracy } from "tns-core-modules/ui/enums"; // used to describe at what accuracy the location should be get

import { NavigationService } from "~/app/core/services/navigation.service";
import { ModalService } from "~/app/shared/modals/modal.service";
import { InputModalComponent } from "~/app/shared/modals/input-modal/input-modal.component";
import { ListViewModel } from "~/app/core/models/list-view.model";
import { LocalNotificationHelper } from "~/app/core/helpers/localnotifications-helper";
import { CameraService } from "~/app/core/services/camera.service";
import { ImageAsset } from "tns-core-modules/image-asset/image-asset";

@Component({
    selector: "ns-home-page",
    templateUrl: "./home-page.component.html",
    styleUrls: ["./home-page.component.css"],
    moduleId: module.id
})
export class HomePageComponent implements OnInit {
    public testProperty: boolean;
    public imageUrl: string;
    public items: ListViewModel[];
    public localNotificationsHelper: LocalNotificationHelper;

    constructor(
        private readonly navigationService: NavigationService,
        private readonly modalService: ModalService,
        private readonly vcRef: ViewContainerRef,
        private readonly cameraService: CameraService
    ) {
        this.localNotificationsHelper = new LocalNotificationHelper();
    }

    public ngOnInit() {
        this.items = [];
        for (let index = 0; index < 10000; index++) {
            const item: ListViewModel = {
                title: index.toString(),
                type: "big",
                imageUrl: ""
            };

            this.items.push(item);
        }

        console.log(screen.mainScreen.widthDIPs);
        console.log(screen.mainScreen.heightDIPs);
        console.log(screen.mainScreen.widthPixels);
        console.log(screen.mainScreen.heightPixels);
        console.log(screen.mainScreen.scale);
    }

    public onChangeTestValue() {
        this.testProperty = true;
    }

    public platformDeclExample() {
        console.log(`min(3, 4) = ${java.lang.Math.min(3, 4)}`);
    }

    public async onGetLocation() {
        await geolocation.enableLocationRequest();
        const result: geolocation.Location = await geolocation.getCurrentLocation({ desiredAccuracy: Accuracy.high, maximumAge: 5000, timeout: 20000 });
        console.log(result);
    }

    public async onTakePicture() {
        const picture: ImageAsset = await this.cameraService.takePircture();
        console.dir(picture);
        this.imageUrl = picture.android;

        //"https://maps.googleapis.com/maps/api/geocode/json?latlng=" + res.latitude + "," + res.longitude + "&key=YOUR-API-KEY";
    }

    public onButtonTap(args) {
        const container: StackLayout = <StackLayout>args.object.parent;

        const stackLayout = new StackLayout();
        stackLayout.margin = 20;
        stackLayout.padding = 10;
        stackLayout.borderWidth = 1;
        stackLayout.borderColor = "lightgray";

        const label1 = new Label();
        label1.text = "NativeScript";
        const label2 = new Label();
        label2.text = "Pragrammatic Components";
        const button = new Button();
        button.text = "Tap the button";
        button.className = "btn btn-primary";

        stackLayout.addChild(label1);
        stackLayout.addChild(label2);
        stackLayout.addChild(button);

        container.addChild(stackLayout);
    }

    public onSubmit(args) {
        const page = args.object.page;
        const textField = <TextField>page.getViewById("name");
        textField.dismissSoftInput();
    }

    public showNotification() {
        LocalNotifications.schedule([
            {
                id: 1,
                title: "The title",
                body: "Recurs every minute until cancelled",
                ticker: "The ticker",
                badge: 1,
                groupedMessages: ["The first", "Second", "Keep going", "one more..", "OK Stop"], //android only
                groupSummary: "Summary of the grouped messages above", //android only
                ongoing: true, // makes the notification ongoing (Android only)
                icon: "res://heart",
                image: "https://cdn-images-1.medium.com/max/1200/1*c3cQvYJrVezv_Az0CoDcbA.jpeg",
                thumbnail: true,
                interval: "minute",
                channel: "My Channel", // default: 'Channel'
                sound: "customsound-ios.wav", // falls back to the default sound on Android
                at: new Date(new Date().getTime() + 10 * 1) // 10 seconds from now
            }
        ]).then(
            function() {
                console.log("Notification scheduled");
            },
            function(error) {
                console.log("scheduling error: " + error);
            }
        );
        // this.localNotificationsHelper.showWithSound(
        //     "Notification",
        //     "Hello World",
        //     new Date(new Date().getTime() + 5 * 1000)
        // )
    }

    public onBack() {
        this.navigationService.back();
    }

    public onNavigate() {
        this.navigationService.navigate(["products"], {
            clearHistory: false, // false by default
            animated: true, // true by default
            transition: {
                name: "explode",
                duration: 380,
                curve: "easeIn"
            }
        });
    }

    public showGenericModal() {
        const ctx = this.modalService.createModalContext<any, string>(this.vcRef, "Enter Username", null, null, "Save");

        this.modalService.createModal(InputModalComponent, ctx).then(result => {
            if (result != null) {
                console.log(result);
            }
        });
    }

    public showAlertDialog() {
        const options: AlertOptions = {
            title: "Attention",
            message: "Your message will be deleted",
            okButtonText: "OK"
        };

        alert(options).then(() => {
            console.log("Message deleted");
        });
    }

    public async showConfirmDialog() {
        const options: ConfirmOptions = {
            title: "Delete message",
            message: "Are you sure you want to delete it?",
            okButtonText: "Yes",
            cancelButtonText: "No",
            neutralButtonText: "Cancel"
        };

        const result = await confirm(options);
        if (result) {
            console.log("User confirmed the action");
        }
    }

    public async showPromptDialog(): Promise<void> {
        const options: PromptOptions = {
            title: "Hey there",
            defaultText: "Enter your name",
            message: "What do we call you?",
            inputType: inputType.text,
            okButtonText: "OK",
            cancelButtonText: "Cancel",
            neutralButtonText: "Nautral",
            cancelable: true
        };

        const result: PromptResult = await prompt(options);
        console.log("Hello, ", result.text);
    }

    public async showLoginDialog(): Promise<void> {
        const options: LoginOptions = {
            title: "Login",
            message: "Login",
            userName: "",
            password: "",
            okButtonText: "Ok",
            cancelButtonText: "Cancel"
        };

        const result: LoginResult = await login(options);
        console.log(result.result);
    }

    public async showActionDialog(): Promise<void> {
        const options: ActionOptions = {
            title: "NativeScript flavor selection",
            message: "Choose your flavor",
            cancelButtonText: "Cancel",
            actions: ["JavaScript", "TypeScript", "Angular", "Vue", "NativeScript"]
        };

        const result: string = await action(options);
        console.log(result);
    }

    public templateSelector(item: ListViewModel, index: number, items: ListViewModel[]) {
        if (item.type === "big") {
            return "big";
        }

        if (item.type === "small-no-image" && !item.imageUrl) {
            return "small";
        }

        if (item.type === "small" && item.imageUrl) {
            return "small-no-image";
        }

        throw new Error("Unreconginzed template!");
    }
}
