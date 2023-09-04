import { Component, OnInit, Input } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';
import { throwError } from 'rxjs';

@Component({
  selector: 'gifs-card',
  templateUrl: './gifs-card.component.html',
})
export class GifsCardComponent implements OnInit{
  @Input()

  public gifCard!: Gif;

  ngOnInit(): void {
    if(!this.gifCard) throw new Error('Gif property is required');
  }
  

}
