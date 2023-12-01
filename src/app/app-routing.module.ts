import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { SearchPlayerComponent } from './search-player/search-player.component';

const routes: Routes = [
  {
    path: "search",
    component: SearchPlayerComponent

  },
  {
    path: "home",
    component: HomePageComponent
  },

  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
