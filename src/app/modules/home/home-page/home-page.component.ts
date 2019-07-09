import { Component } from "@angular/core";
import { NavigationService } from '~/app/core/services/navigation.service';

@Component({
    selector: "ns-home-page",
    templateUrl: "./home-page.component.html",
    styleUrls: ["./home-page.component.css"],
    moduleId: module.id
})
export class HomePageComponent {
    constructor(private readonly navigationService: NavigationService) {}

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
}
