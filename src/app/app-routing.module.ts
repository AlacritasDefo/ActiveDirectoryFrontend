import {RouterModule, Routes} from "@angular/router";
import {ProfileComponent} from "./profile/profile.component";
import {AuthGuard} from "./auth.guard";
import {NgModule} from "@angular/core";
import {TeamComponent} from "./team/team.component";
import {TeamDetailsComponent} from "./team/team-details/team-details.component";
import {PlayerComponent} from "./player/player.component";
import {PlayerDetailsComponent} from "./player/player-details/player-details.component";

const routes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'team',
    component: TeamComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'team/detail/:id',
    component: TeamDetailsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'player',
    component: PlayerComponent,
    canActivate: [AuthGuard],
  },
  {
      path: 'player/detail/:id',
      component: PlayerDetailsComponent,
      canActivate: [AuthGuard]
    }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {}
