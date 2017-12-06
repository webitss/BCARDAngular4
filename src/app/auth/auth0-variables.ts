interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'Hs2lJZh0PsQX3iH4LuPP0vF0JCWvpFVV',
  domain: 'ch-login.auth0.com',
  callbackURL: 'http://localhost:4200/container'
};
