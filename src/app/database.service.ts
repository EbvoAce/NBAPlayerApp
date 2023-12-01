import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  private NBAPSearchHistory: string[] = [] 

  constructor() { }

  addplayer(player:string){
    this.NBAPSearchHistory.push(player)
    window.localStorage.setItem('nbaplayerarray', JSON.stringify(this.NBAPSearchHistory));
    this.savechanges()
  }

  deleteplayer(i: number){
    this.NBAPSearchHistory.splice(i, 1);
    window.localStorage.setItem('nbaplayerarray', JSON.stringify(this.NBAPSearchHistory))
    this.savechanges()
  }

  savechanges(){
    window.localStorage.setItem('nbaplayerarray', JSON.stringify(this.NBAPSearchHistory))
  }

  getplayers(){
    return (this.NBAPSearchHistory)
  }
}
