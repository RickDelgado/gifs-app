import { Component, OnInit, Input } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interface';

@Component({
  selector: 'gifs-card-list',
  templateUrl: './card-list.component.html',
})
export class CardListComponent implements OnInit {

  @Input()
  public gifs:Gif[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
