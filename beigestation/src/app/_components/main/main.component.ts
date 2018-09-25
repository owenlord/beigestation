import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  template: `
      <div class="main-container">
          <div class="panel-one">Hot Nugs</div>
          <div class="panel-two">Sexy Pasts</div>
          <div class="panel-three">Crispy Chris</div>
          <div class="panel-merch">Merch</div>
      </div>
  `,
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
