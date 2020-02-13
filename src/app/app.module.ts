import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import {
  SocialLoginModule,
  AuthServiceConfig,
  FacebookLoginProvider
} from "angularx-social-login";
import {
  MatIconModule,
  MatButtonModule,
  MatCardModule
} from "@angular/material";
const config = new AuthServiceConfig([
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("place-your-id-got-from-fb")
  }
]);

export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocialLoginModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
