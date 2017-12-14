import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CharacterDetailsComponent } from './character-details/character-details.component';
import { CharacterFinderComponent } from './character-finder/character-finder.component';

const routes = [
  { path: '', component: CharacterFinderComponent },
  { path: 'characters/:id', component: CharacterDetailsComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
