import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gifs.interface';

@Component({
  selector: 'gifs-home-page',
  templateUrl: './home-page.component.html',
})
export class HomePageComponent implements OnInit {

  constructor(private giftService:GifsService) { }

  get gifs(): Gif[]{
    return this.giftService.gifsList;
  };

  ngOnInit(): void {
  }

}
