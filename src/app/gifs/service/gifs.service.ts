import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http'
import { SearchResponse, Gif } from '../interfaces/gifs.interfaces';

@Injectable({providedIn: 'root'})
export class GifsService {
    private _tagsHistory: string[] = [];
    private apiKey:       string = "mkUfxZa1BFWA4k4Rdjgf2LPLT5pSU3Vo";
    private serviceUrl:   string = "https://api.giphy.com/v1/gifs";
    public listGifs: Gif[] = [];

    constructor(
        private http: HttpClient,
    ) {
        this.loadLocaStorage();
        // console.log(localStorage.getItem('history'));
        // console.log(this._tagsHistory[0]);        
     }

    get tagsHistory(){
        return [...this._tagsHistory];
    }

    private organizeHistory(tag:string){
        tag = tag.toLowerCase();

        if(this._tagsHistory.includes(tag)){
            this._tagsHistory = this._tagsHistory.filter( (oldTag) => oldTag !== tag);
        }
        this._tagsHistory.unshift(tag);
        this._tagsHistory = this._tagsHistory.splice(0,10);
        this.saveLocaStorage();
    }

    private saveLocaStorage():void {
        localStorage.setItem('history', JSON.stringify(this._tagsHistory))
    }

    private loadLocaStorage():void {
        if(!localStorage.getItem('history')) return

        const temporal = localStorage.getItem('history');
        this._tagsHistory = JSON.parse(temporal!);
        if(!localStorage.getItem('history')){
            this.searchTag(this._tagsHistory[0])
        }
    }

    searchTag(tag: string):void {
        if(tag.length === 0) return
        this.organizeHistory(tag);
        const params = new HttpParams()
            .set('api_key', this.apiKey)
            .set('limit', '10')
            .set('q', tag)

        this.http.get<SearchResponse>(`${this.serviceUrl}/search`, { params })
            .subscribe( resp => {
                this.listGifs = resp.data
                // console.log(this.listGifs)
            });

        
    }
    
}