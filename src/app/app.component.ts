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

  scrollToTop(): void {

    // console.log('click')
    // console.log(this.windowScrolled)
    // console.log('pageYoffset: ' + window.pageYOffset)
    // console.log('innerHeight: ' + window.innerHeight)

    document.getElementById('pageTop')?.scrollIntoView({ behavior: 'smooth' });

  }
}
