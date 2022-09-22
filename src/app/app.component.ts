import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'GoodFunTea';

  // windowScrolled = false;

  ngOnInit() {
    // window.addEventListener('scroll', () => {
    //   this.windowScrolled = window.pageYOffset !== 0;
    // }, true);
  }

  onActivate() {
    // window.scroll(0,0);

    // window.scroll({
    //   top: 0,
    //   left: 0,
    //   behavior: 'smooth'
    // });
    // document.body.scrollTop = 0;
    //or document.querySelector('body').scrollTo(0,0)

    document.getElementById('pageTop')?.scrollIntoView(true);

  }

}
