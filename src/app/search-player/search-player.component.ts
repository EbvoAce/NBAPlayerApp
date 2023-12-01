import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-search-player',
  templateUrl: './search-player.component.html',
  styleUrls: ['./search-player.component.scss']
})
export class SearchPlayerComponent implements OnInit {
  public pageTitle: string = "Player Search";
  
  PlayerName: FormControl = new FormControl(null, [Validators.required, Validators.maxLength(30)])
  entryGroup: FormGroup = new FormGroup({
  Player: this.PlayerName
  })
  playerid: any = "";

  constructor(private http: HttpClient, private database: DatabaseService) { }

  playerbase:  any = [];
  playerstats: any = [];
  ngOnInit(): void {
  }

  onSubmit(event: Event){
    if(this.entryGroup.valid){
      this.http.get(` https://www.balldontlie.io/api/v1/players?search=${this.PlayerName.value}`).subscribe((resposne: any)=>{
      console.log(JSON.stringify(resposne));
      this.playerbase = resposne.data
      this.database.addplayer(this.PlayerName.value)
      if(this.playerbase.length == 1){
        this.playerid = (this.playerbase[0].id)
        this.http.get(`https://www.balldontlie.io/api/v1/season_averages?season=2021&player_ids[]=${this.playerid}`).subscribe((secondresposne: any)=>{
          console.log(JSON.stringify(secondresposne))
          this.playerstats= secondresposne.data[0]
        });
        

      }else{
        this.playerstats = null
      }

      
      
  }
      )}
}

}