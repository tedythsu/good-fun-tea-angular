import { Component } from '@angular/core';

// import Swiper core and required modules
// import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import SwiperCore, { Navigation, Pagination, A11y, Autoplay, EffectFade } from 'swiper';

// install Swiper modules
// SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
SwiperCore.use([Navigation, Pagination, A11y, Autoplay, EffectFade ]);

// import 'swiper/less';
// import 'swiper/less/navigation';
// import 'swiper/less/pagination';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'GoodFunTea';

  public innerWidth: any;

  ngOnInit() {
    this.innerWidth = window.innerWidth;
}

  onSwiper({swiper}: {swiper: Event}) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
    
  }  
}
