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

  constructor(private httpClient: HttpClient) {
    this.loadHistory();
    this.loadFistOnHistory();
   }

  public get tagHistory(): string[] {
    return [...this._tagHistory];
  }

  loadFistOnHistory(){
    if(this._tagHistory.length > 0)
      this.searchTag(this._tagHistory[0]);
  }

  searchTag(tag:string){
    if(tag.length == 0) return;

    this.reOrderTags(tag);

    const params = new HttpParams()
    .set('api_key', this._apiKey)
    .set('q', tag)
    .set('limit', '8');

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

      this.saveTags();

  }

  loadHistory(){
    const data = localStorage.getItem('history');
    if (data) 
      this._tagHistory = JSON.parse(data);
  }

  private saveTags(){
    localStorage.setItem('history', JSON.stringify(this._tagHistory));
  }


}
