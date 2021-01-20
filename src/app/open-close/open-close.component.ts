import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-open-close',
  templateUrl: './open-close.component.html',
  styleUrls: ['./open-close.component.css'],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: '#abdee1'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.5,
        backgroundColor: 'green'
      })),
      transition('* => closed', [
        animate('1s')
      ]),
      transition('* => open', [
        animate('0.5s')
      ]),
    ]),
  ],
  })
export class OpenCloseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  isOpen = true;

  toggleButton() {
    this.isOpen = !this.isOpen;
  }
}
