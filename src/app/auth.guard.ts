import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from "@angular/router";
import {OAuthService} from "angular-oauth2-oidc";
import {Injectable} from "@angular/core";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private oauthService: OAuthService
  ) {
  }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot){
    let hasIdToken = this.oauthService.hasValidIdToken(), hasAccessToken = this.oauthService.hasValidAccessToken()
    return (hasAccessToken && hasIdToken);
  }
}
