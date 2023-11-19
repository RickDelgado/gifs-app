import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { Gif, SearchResponse } from '../interfaces/gifs.interface';


@Injectable({
  providedIn: 'root'
})
export class GifsService {

  public gifsList:Gif[] = [];

  private _tagHistory: string[] = [];
  private _apiKey = 'J1eRS2QvGuXEcV3wKycsK7q0faYeQnU6';
  private serviceUrl = 'http://api.giphy.com/v1/gifs';

  constructor(private httpClient: HttpClient) { }

  public get tagHistory(): string[] {
    return [...this._tagHistory];
  }

  searchTag(tag:string){
    if(tag.length == 0) return;

    this.reOrderTags(tag);

    const params = new HttpParams()
    .set('api_key', this._apiKey)
    .set('q', tag)
    .set('limit', '5');

    this.httpClient.get<SearchResponse>(`${this.serviceUrl}/search`, { params })
      .subscribe(resp => {
        this.gifsList = resp.data;
      });
 
  }

  reOrderTags(tag:string){

    tag = tag.trim().toLocaleLowerCase();

    this._tagHistory = 
    this._tagHistory.filter(t => t != tag);

    this._tagHistory.unshift(tag);

    if(this._tagHistory.length >10)
      this._tagHistory.pop();

  }


}
