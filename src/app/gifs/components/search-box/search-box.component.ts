import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
    selector: 'gifs-search-box',
    template: `
    <h5>Buscar:</h5>
    <input type="text"
    class="form-control"
    placeholder="Buscar gifs..."
    (keyup.enter)="searchTag()"
    #txtTagInput
    >
    `
})

export class SearchBoxComponent {
    @ViewChild('txtTagInput')
    tagInput!: ElementRef<HTMLInputElement>

    constructor( private gifsService: GifsService) { }

    searchTag() {
        const newTag = this.tagInput.nativeElement.value;
        console.log('New tag', newTag);
        this.gifsService.searchTag(newTag);
        this.tagInput.nativeElement.value = "";
    }
}