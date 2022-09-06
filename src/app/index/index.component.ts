import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router'; // <-- import

// import Swiper core and required modules
// import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import SwiperCore, { Navigation, Pagination, A11y, Autoplay, EffectFade } from 'swiper';

// install Swiper modules
// SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
SwiperCore.use([Navigation, Pagination, A11y, Autoplay, EffectFade ]);

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onSwiper({swiper}: {swiper: Event}) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }  
}
