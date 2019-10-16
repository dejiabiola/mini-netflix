import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome-note',
  template: `
    <h1>
      Watch High-Quality Movies Online
    </h1>
    <p>
      Welcome to the official Flingo website. Here you can stream quality movie content seamlessly.
    </p>
    <hr>
  `,
  styles: [
    `
      h1{
        color: white;
        text-align: center;
        margin-top: 150px;
        font-size: 2.75em;
        font-weight: 700;
        text-shadow: 0 2px 2px rgba(0,0,0,.4);
        margin-bottom: 25px;
      }

      p {
        font-size: 1.4rem;
        text-align: center;
        font-size: 1em;
        color: #ccc;
        width: 650px;
        margin: 0 auto;
        line-height: 21px;
        margin-bottom: 30px;

      }
      hr{
        width: 80%;
        background-color: white;
        opacity: 0.4;
      }
    `
  ]
})
export class WelcomeNoteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
