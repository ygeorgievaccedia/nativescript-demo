import { Component } from "@angular/core";
import { EventData } from "tns-core-modules/ui/page/page";
import { Switch } from "tns-core-modules/ui/switch/switch";
import { ListPicker } from "tns-core-modules/ui/list-picker";

let pokemonList = ["Bulbasaur", "Parasect", "Venonat", "Venomoth", "Diglett", "Dugtrio", "Meowth", "Persian", "Psyduck", "Arcanine", "Poliwrath", "Machoke"];

@Component({
    selector: "ns-widgets-page",
    templateUrl: "./widgets-page.component.html",
    styleUrls: ["./widgets-page.component.css"],
    moduleId: module.id
})
export class WidgetsPageComponent {
    public pokemons: Array<string> = [];
    public picked: string;

    constructor() {
        for (let pokemon of pokemonList) {
            this.pokemons.push(pokemon);
        }
    }

    public onCheckedChange(args: EventData) {
        let mySwitch = args.object as Switch;
        let isChecked = mySwitch.checked; // boolean
    }

    public selectedIndexChanged(args) {
        let picker = <ListPicker>args.object;
        this.picked = this.pokemons[picker.selectedIndex];
    }
}
