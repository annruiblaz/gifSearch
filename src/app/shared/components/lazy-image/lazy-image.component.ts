import { Component, Input } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html'
})
export class LazyImageComponent {

  @Input()
  public url!: string | undefined;

  @Input()
  public alt!: string;

  public hasLoaded: boolean = false;

  ngOnInit(): void {
    if(!this.url) throw new Error('url property is required by lazy image');
  }

  onLoad(): void {
    setTimeout(() => {
      this.hasLoaded = true;
    }, 1000);
  }

}
