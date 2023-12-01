import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DatabaseService } from './database.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  
  istoggledarktheme: boolean = false;
  constructor(public database: DatabaseService, private router: Router){

  }


  

 
  
  title: string = 'NBAPlayerWatch';


  TitleChange(componentTitle: string){
    this.title = componentTitle;
  }

  deleteplayer(index: number){
this.database.deleteplayer(index)
  }

  shareclick(){
    this.router.navigateByUrl('instagram.com')
  }

  

  
 

  
}
function player(player: any) {
  throw new Error('Function not implemented.');
}

