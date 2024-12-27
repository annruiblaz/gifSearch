import { Component, Input } from "@angular/core";
import { FeaturedGIF, Gif } from "../../interfaces/gifs.interfaces";


@Component({
    selector: "gifs-card-list",
    templateUrl: "./card-list.component.html"
})
export class CardListComponent {

    @Input()
    public gifs: Gif[] = [];

}