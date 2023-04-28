import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfileComponent } from './profile/profile.component';
import {MatButtonModule} from "@angular/material/button";
import {MatTabsModule} from "@angular/material/tabs";
import {RouterLinkWithHref} from "@angular/router";
import {AuthGuard} from "./auth.guard";
import {AuthConfig, NullValidationHandler, OAuthModule, OAuthStorage, ValidationHandler} from "angular-oauth2-oidc";
import {authConfig} from "./auth.config";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app-routing.module";
import { TeamComponent } from './team/team.component';
import { PlayerComponent } from './player/player.component';
import { TeamDetailsComponent } from './team/team-details/team-details.component';
import { PlayerDetailsComponent } from './player/player-details/player-details.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    TeamComponent,
    PlayerComponent,
    TeamDetailsComponent,
    PlayerDetailsComponent,
  ],
  imports: [
    HttpClientModule,
    OAuthModule.forRoot({
      resourceServer: {
        allowedUrls: ['https://graph.microsoft.com/v1.0/me', 'http://localhost:8080'],
        sendAccessToken: true
      }
    }),
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTabsModule,
    RouterLinkWithHref,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AuthGuard,
    {
      provide: AuthConfig, useValue: authConfig
    },
    {
      provide: OAuthStorage, useValue: localStorage
    },
    {
      provide: ValidationHandler, useClass: NullValidationHandler
    },
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
