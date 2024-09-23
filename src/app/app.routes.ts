import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { PlayersComponent } from './players/players.component';
import { SigninComponent } from './signin/signin.component';
import { CreateGuildComponent } from './create-guild/create-guild.component';
import { CreateCharacterComponent } from './create-character/create-character.component';
import { CharacterFactionComponent } from './character-faction/character-faction.component';

export const routes: Routes = [
  // {path:'',component:AppComponent},
  {path: 'home', component: HomeComponent},
  {path: 'players', component: PlayersComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'create-guild', component: CreateGuildComponent},
  {path: 'create-character', component: CreateCharacterComponent},
  {path: 'character-faction', component: CharacterFactionComponent}
];
