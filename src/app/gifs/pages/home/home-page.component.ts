import { Component } from '@angular/core';
import { GifsService } from '../../service/gifs.service';
import { Gif } from '../../interfaces/gifs.interfaces';
import { ReturnStatement } from '@angular/compiler';

@Component({
  selector: 'gifs-home-page',
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {
  constructor(
    public gifService: GifsService,
  ) { }

  get gifs(): Gif[] {
    return this.gifService.listGifs;
  }

}
