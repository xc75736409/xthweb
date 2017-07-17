import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";


const appRoutes: Routes = [
  /*{ path: 'crisis-center', component: CrisisListComponent },*/
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
    // other imports here
  ],
})
export class AppModule {  }
