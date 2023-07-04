import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TableauVizComponent } from './tableau-viz/tableau-viz.component';
import { D3BarComponent } from './d3-bar/d3-bar.component';
import { MoviesComponent } from './movies/movies.component';
import { GeneralComponent } from './movies/general/general.component';
import { Top100Component } from './movies/top100/top100.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { SeriesComponent } from './series/series.component';
import { GeneralSeriesComponent } from './series/general-series/general-series.component';
import { Top100SeriesComponent } from './series/top100-series/top100-series.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    NotFoundComponent,
    TableauVizComponent,
    D3BarComponent,
    MoviesComponent,
    GeneralComponent,
    Top100Component,
    AnalyticsComponent,
    SeriesComponent,
    GeneralSeriesComponent,
    Top100SeriesComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
