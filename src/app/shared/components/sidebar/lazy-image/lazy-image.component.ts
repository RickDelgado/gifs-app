import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
  styleUrls: ['./lazy-image.component.css']
})
export class LazyImageComponent implements OnInit {

  @Input()
  public url:string = '';


  @Input()
  public title:string = '';

  hasLoaded:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onLoad(){
    console.log('Image loaded');
    this.hasLoaded = true;
  }

}
