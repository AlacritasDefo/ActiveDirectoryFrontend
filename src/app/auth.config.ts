import {AuthConfig} from "angular-oauth2-oidc";

export const authConfig: AuthConfig = {
  showDebugInformation: true,
  issuer: 'https://login.microsoftonline.com/f7a76c87-a440-42c1-bab5-2d077a98a676/v2.0',
  redirectUri: window.location.origin,
  postLogoutRedirectUri: window.location.origin,
  clientId: '75049194-c412-475f-b807-a21acd4bc27d',
  responseType: 'code',
  scope: 'User.Read',
  useSilentRefresh: true,
  strictDiscoveryDocumentValidation: false
}
