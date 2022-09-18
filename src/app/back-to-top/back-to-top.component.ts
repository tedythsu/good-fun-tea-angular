import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-back-to-top',
  templateUrl: './back-to-top.component.html',
  styleUrls: ['./back-to-top.component.css']
})
export class BackToTopComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  scrollToTop(): void {

    // console.log('click')
    // console.log(this.windowScrolled)
    // console.log('pageYoffset: ' + window.pageYOffset)
    // console.log('innerHeight: ' + window.innerHeight)

    document.getElementById('pageTop')?.scrollIntoView({ behavior: 'smooth' });

  }

}
