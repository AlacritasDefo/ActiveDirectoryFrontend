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
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
  ],
  imports: [
    HttpClientModule,
    OAuthModule.forRoot({
      resourceServer: {
        allowedUrls: ['https://graph.microsoft.com/v1.0/me'],
        sendAccessToken: true
      }
    }),
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTabsModule,
    RouterLinkWithHref,
    AppRoutingModule
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
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
