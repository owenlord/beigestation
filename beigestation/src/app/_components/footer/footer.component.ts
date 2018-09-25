import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
      <footer>
          <div>
              <h1>{{title}}</h1>
          </div>
          <div>
              <a routerLink="/">
                  <i class="fa fa-instagram"></i>
              </a>
          </div>
      </footer>
  `,
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {
  title: string = 'beigestation';
  constructor() { }

  ngOnInit() {
    this.title = this.title.toUpperCase();
  }

}
