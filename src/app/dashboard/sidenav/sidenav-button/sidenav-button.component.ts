import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { Component, ElementRef, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav-button',
  templateUrl: './sidenav-button.component.html',
  styleUrls: ['./sidenav-button.component.scss'],
  animations: [
    trigger('smoothCollapse', [
      state(
        'initial',
        style({
          height: '0',
          overflow: 'hidden',
          opacity: '0',
          visibility: 'hidden',
        })
      ),
      state(
        'final',
        style({
          overflow: 'hidden',
        })
      ),
      transition(
        'initial<=>final',
        animate('550ms cubic-bezier(0.25, 1, 0.5, 1)')
      ),
    ]),
  ],
})
export class SidenavButtonComponent implements OnInit {
  public expanded: boolean = false;
  @HostListener('click', ['$event'])
  onClick(target: any) {
    console.log(target.srcElement.hasAttribute('test'));
    this.expanded = !this.expanded;
  }

  constructor() {}

  ngOnInit(): void {}
}
