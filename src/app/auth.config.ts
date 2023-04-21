import {AuthConfig} from "angular-oauth2-oidc";

export const authConfig: AuthConfig = {
  issuer: 'https://login.microsoftonline.com/f7a76c87-a440-42c1-bab5-2d077a98a676/v2.0',
  redirectUri: window.location.origin,
  postLogoutRedirectUri: window.location.origin,
  clientId: '36f7432d-a9f0-40c9-b2bb-504e154aa4f7',
  responseType: 'code',
  scope: 'openid offline_access email profile User.Read',
  useSilentRefresh: true,
  strictDiscoveryDocumentValidation: false
}
