import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {StatisticsComponent} from "./statistics/statistics.component";

const appRoutes: Routes = [
  {path: '', redirectTo: 'statistics', pathMatch: 'full'},
  { path: 'statistics', component: StatisticsComponent }

];
@NgModule({
  imports: [
    RouterModule.forRoot( appRoutes,  { useHash: true }  )
  ],
  exports: [RouterModule]
})
export class AppRouter {  }
