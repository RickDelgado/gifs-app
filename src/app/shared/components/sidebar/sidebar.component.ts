import { Component, OnInit, ViewChild } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  serviceGifs:GifsService;

  constructor(private gifsService:GifsService) {
    this.serviceGifs = gifsService;
   }

  ngOnInit(): void {

  }

  onClick(event:Event){
    const button = event.target as HTMLButtonElement;

    const tag = button.textContent ? 
    button.textContent :'';
    
    this.serviceGifs.searchTag(tag);
  }

}
