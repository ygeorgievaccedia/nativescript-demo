import { Component, OnInit } from "@angular/core";
import * as trace from "tns-core-modules/trace";
trace.setCategories("Angular");
trace.enable();

const Listener = (function() {
    function Listener(filter) {
        this.filter = filter;
    }

    Listener.prototype.on = function(object, name, data) {
        console.log(data);
    };

    return Listener;
})();

@Component({
    selector: "ns-app",
    moduleId: module.id,
    templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {
    public ngOnInit(): void {
        const listener = new Listener("NativeScript Angular");
        trace.addEventListener(listener);

        const data = {
            title: "NativeScript DEMO"
        };

        trace.notifyEvent(this, "NativeScript Angular", data);
    }
}
