import { LocalNotifications } from "nativescript-local-notifications";
import { alert } from "tns-core-modules/ui/dialogs";

export class LocalNotificationHelper {
    public showWithSound(title, message, time): void {
        LocalNotifications.schedule([{
            id: 1,
            title: title,
            body: message,
            badge: 1,
            at: time
        }]);

        LocalNotifications.addOnMessageReceivedCallback(data => {
            alert({
                title: "Local Notficiation received",
                message: `id: '${data.id}', title: '${data.title}'`,
                okButtonText: "Okay"
            })
        })
    }

    public continues(): void {
        LocalNotifications.schedule([{
            id: 2,
            title: "Notification that repeats every minute",
            body: "Notification body",
            interval: "minute",
            sound: null,
            at: new Date(new Date().getTime() + 5 * 1000) // 5 seconds from now
        }])
    }

    public cancelAll(): void {
        LocalNotifications.cancelAll();
    }
}
