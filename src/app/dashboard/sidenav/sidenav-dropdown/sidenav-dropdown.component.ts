import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav-dropdown',
  templateUrl: './sidenav-dropdown.component.html',
  styleUrls: ['./sidenav-dropdown.component.scss'],
  animations: [
    trigger('smoothCollapse', [
      state(
        'initial',
        style({
          height: '0',
          overflow: 'hidden',
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
export class SidenavDropdownComponent implements OnInit {
  public expanded: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
