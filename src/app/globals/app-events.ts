import * as app from "tns-core-modules/application";
import { setNativeEvents } from './app-events-native';

export const setAppEvents = () => {
    setNativeEvents();

    // Triggered when the app launches
    app.on(app.launchEvent, function(_args: app.ApplicationEventData) {
        console.log("NATIVESCRIPT:", "launchEvent");
    });
    // Triggered when you see the page
    app.on(app.displayedEvent, function(_args: app.ApplicationEventData) {
        console.log("NATIVESCRIPT:", "displayedEvent");
    });
    // Triggered when your app goes to background
    app.on(app.suspendEvent, function(_args: app.ApplicationEventData) {
        console.log("NATIVESCRIPT:", "suspendEvent");
    });
    // Triggered when app launches, and also when you resume app from
    app.on(app.resumeEvent, function(_args: app.ApplicationEventData) {
        console.log("NATIVESCRIPT:", "resumeEvent");
    });
    // Triggered when you exit the application
    app.on(app.exitEvent, function(_args: app.ApplicationEventData) {
        console.log("NATIVESCRIPT:", "exitEvent");
    });
    // Triggered when your app is running out of memory
    app.on(app.lowMemoryEvent, function(_args: app.ApplicationEventData) {
        console.log("NATIVESCRIPT:", "lowMemoryEvent");
    });
    // Triggered when an uncaught error bubbles up the application stack
    app.on(app.uncaughtErrorEvent, function(_args: app.ApplicationEventData) {
        console.log("NATIVESCRIPT:", "uncaughtErrorEvent");
    });
    // Triggered when the device orientation changes
    app.on(app.orientationChangedEvent, function(_args: app.ApplicationEventData) {
        console.log("NATIVESCRIPT:", "orientationChangedEvent");
    });
};
