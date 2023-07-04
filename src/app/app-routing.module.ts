import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router'
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {MoviesComponent} from "./movies/movies.component";
import {GeneralComponent} from "./movies/general/general.component";
import {Top100Component} from "./movies/top100/top100.component";
import {AnalyticsComponent} from "./analytics/analytics.component";
import {SeriesComponent} from "./series/series.component";
import {GeneralSeriesComponent} from "./series/general-series/general-series.component";
import {Top100SeriesComponent} from "./series/top100-series/top100-series.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'analytics', component: AnalyticsComponent},
  {path: 'movies', component: MoviesComponent,
   children: [
     {
       path: '',
       component: GeneralComponent,
      },
      {
        path: 'top100',
        component: Top100Component,
      },
    ],
  },
  {path: 'series', component: SeriesComponent,
    children: [
      {
        path: '',
        component: GeneralSeriesComponent,
      },
      {
        path: 'top100',
        component: Top100SeriesComponent,
      },
    ],
  },
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
