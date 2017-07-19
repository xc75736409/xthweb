import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
/*App路由*/
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from "@angular/router";
import {AppComponent} from './app.component';
import {StatisticsComponent} from './statistics/statistics.component';
import {AppRouter} from "./app-router.modules";


@NgModule({
  declarations: [
    AppComponent,
    StatisticsComponent
  ],
  imports: [
    FormsModule,
    HttpModule,
    BrowserModule,
    RouterModule,
    AppRouter
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
