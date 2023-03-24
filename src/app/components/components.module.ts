import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from '../app-routing.module';
import { SlideShowComponent } from './slide-show/slide-show.component';
import { SwiperModule } from 'swiper/angular';
import { PosterGridComponent } from './poster-grid/poster-grid.component';
import { RatingModule } from 'ngx-bootstrap/rating';
import { FormsModule } from '@angular/forms';
import { PipesModule } from '../pipes/pipes.module';
import { SliderActoresComponent } from './slider-actores/slider-actores.component';

@NgModule({
  declarations: [
    NavbarComponent,
    SlideShowComponent,
    PosterGridComponent,
    SliderActoresComponent,

  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    SwiperModule,
    FormsModule,
    RatingModule,
    PipesModule
  ]
  ,exports : [
    NavbarComponent,
    SlideShowComponent,
    PosterGridComponent
  ]
})
export class ComponentsModule { }
