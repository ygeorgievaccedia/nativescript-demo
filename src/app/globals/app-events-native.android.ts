import * as app from "tns-core-modules/application";

export const setNativeEvents = () => {
    // Android event names are self explanatory
    app.android.on(app.AndroidApplication.activityCreatedEvent, function(args: app.AndroidActivityBundleEventData) {
        console.log("ANDROID:", args.eventName);
    });
    app.android.on(app.AndroidApplication.activityStartedEvent, function(args: app.AndroidActivityEventData) {
        console.log("ANDROID:", args.eventName);
    });
    app.android.on(app.AndroidApplication.activityDestroyedEvent, function(args: app.AndroidActivityEventData) {
        console.log("ANDROID:", args.eventName);
    });
    app.android.on(app.AndroidApplication.activityBackPressedEvent, function(args: app.AndroidActivityEventData) {
        console.log("ANDROID:", args.eventName);
    });
    app.android.on(app.AndroidApplication.activityPausedEvent, function(args: app.AndroidActivityEventData) {
        console.log("ANDROID:", args.eventName);
    });
    app.android.on(app.AndroidApplication.activityResumedEvent, function(args: app.AndroidActivityEventData) {
        console.log("ANDROID:", args.eventName);
    });
    app.android.on(app.AndroidApplication.activityStoppedEvent, function(args: app.AndroidActivityEventData) {
        console.log("ANDROID:", args.eventName);
    });
    app.android.on(app.AndroidApplication.saveActivityStateEvent, function(args: app.AndroidActivityEventData) {
        console.log("ANDROID:", args.eventName);
    });
    app.android.on(app.AndroidApplication.activityResultEvent, function(args: app.AndroidActivityEventData) {
        console.log("ANDROID:", args.eventName);
    });
};
