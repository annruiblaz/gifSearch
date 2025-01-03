import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  constructor (private gifsService: GifsService) {}

  get searchList() {
    return this.gifsService.tagsHistory;
  }

  searchGif(searchTag: string) :void {
    this.gifsService.searchTag(searchTag);
  }

}
