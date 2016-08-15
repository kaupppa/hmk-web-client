import { Component } from '@angular/core';

@Component({
  selector: 'khl',
  styles: [`
    .khl-container {
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;

      -webkit-flex-direction: row;
      -ms-flex-direction: row;
      flex-direction: row;

      -webkit-flex-wrap: wrap;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;

      -webkit-justify-content: flex-start;
      -ms-flex-pack: flex-start;
      justify-content: flex-start;

      -webkit-align-content: flex-start;
      -ms-flex-line-pack: flex-start;
      align-content: flex-start;

      -webkit-align-items: center;
      -ms-flex-align: center;
      align-items: center;
    }

    .khl-text {
      -webkit-order: 0;
      -ms-flex-order: 0;
      order: 0;

      -webkit-flex: 0 1 auto;
      -ms-flex: 0 1 auto;
      flex: 0 1 auto;

      -webkit-align-self: auto;
      -ms-flex-item-align: auto;
      align-self: auto;
    }
    .khl-img-container {
      -webkit-order: 0;
      -ms-flex-order: 0;
      order: 0;

      -webkit-flex: none;
      -ms-flex: none;
      flex: none;

      -webkit-align-self: auto;
      -ms-flex-item-align: auto;
      align-self: auto;
      margin-right: 10px;
    }
    .khl-img {
      width: 100px;
      height: 100px;
    }
  `],
  template: `
    <md-card>
      <div class="khl-container">
        <div class="khl-img-container">
          <a href="http://www.khl.fi/"><img class="khl-img" src="assets/khl-logo.png"></a>
        </div>
        <div class="khl-text">
          <p>KHL:n jäsen</p>
        </div>
      </div>
    </md-card>
  `
})
export class Khl {
}
