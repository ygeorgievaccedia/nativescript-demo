import * as utils from "tns-core-modules/utils/utils";

declare var UIApplication: any;

export function setStatusBarColors() {
    utils.ios.getter(UIApplication, UIApplication.sharedApplication).statusBarStyle = UIStatusBarStyle.LightContent;
}
