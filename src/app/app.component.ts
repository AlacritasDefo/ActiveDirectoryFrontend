import {Component, OnDestroy, OnInit} from '@angular/core';
import {NullValidationHandler, OAuthEvent, OAuthService} from "angular-oauth2-oidc";
import {authConfig} from "./auth.config";
import {filter, Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'ActiveDirectoryFrontend';
  loginDisplay: boolean = false;
  private readonly _destroying$ = new Subject<void>();


  constructor(private oauthService: OAuthService) {
    this.oauthService.configure(authConfig);
    this.oauthService.tokenValidationHandler = new NullValidationHandler();
    this.oauthService.setStorage(sessionStorage);
    this.oauthService.setupAutomaticSilentRefresh();
    this.oauthService.oidc = true;
    this.oauthService.loadDiscoveryDocument().then(() =>
    this.oauthService.tryLogin({
      onTokenReceived: context => {
        console.debug("logged in")
        console.debug(context)
      }
    }));
    this.oauthService.events.subscribe((event: OAuthEvent) => {
    if (event.type === 'token_received'){
      console.debug('logged in');
    }})
  }
  login(){
    this.oauthService.initLoginFlow()
  }

  logout() {
    this.oauthService.logOut()
  }

  setLoginDisplay(){
    if (this.oauthService.hasValidAccessToken()) {
      this.loginDisplay = true;
    }
  }

  ngOnInit(): void {
    this.oauthService.events
      .pipe(filter((e: OAuthEvent) => e.type === "token_received"))
      .pipe(takeUntil(this._destroying$))
      .subscribe(() =>
      this.setLoginDisplay());
  }

  ngOnDestroy(): void {
    this._destroying$.next(undefined);
    this._destroying$.complete();
  }

}
