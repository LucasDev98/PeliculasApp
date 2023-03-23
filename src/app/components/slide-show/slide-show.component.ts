import { Component, Input, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { Movie } from 'src/app/interfaces/cartelera-response';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);


@Component({
  selector: 'app-slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.css'],

  encapsulation : ViewEncapsulation.None,
})
export class SlideShowComponent    {
    @Input() movies! : Movie [];
   constructor() {


    }
}
