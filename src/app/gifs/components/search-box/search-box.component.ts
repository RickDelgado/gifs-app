import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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

export class SearchBoxComponent implements OnInit {

    @ViewChild('txtTagInput')
    tagImput!:ElementRef<HTMLInputElement>

    constructor(private gifsService:GifsService) { }

    ngOnInit() { }

    searchTag(){
        const newTag = this.tagImput.nativeElement.value;
        this.gifsService.searchTag(newTag);
        this.tagImput.nativeElement.value = '';
    }
}