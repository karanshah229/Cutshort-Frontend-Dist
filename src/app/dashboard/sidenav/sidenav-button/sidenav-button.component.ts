import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { Component, HostListener, Input, OnInit } from '@angular/core';

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
          // opacity: '0',
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
  @Input('border') border: Boolean = false;
  public expanded: boolean = false;
  private selectedOption = '';

  @HostListener('click', ['$event'])
  onClick2(event: any) {
    console.log(event.target);
    this.expanded = true;
    event.stopPropagation();
    if (event.target.tagName.toLowerCase() === 'option') {
      this.selectedOption = event.target.getAttribute('val');
      alert('You selected option with value: ' + this.selectedOption);
      if (this.expanded) this.expanded = false;
    }
  }

  @HostListener('document:click', ['$event'])
  onClick(event: any) {
    if (this.expanded) this.expanded = false;
  }

  constructor() {}

  ngOnInit(): void {}

  get selectedOptionVal(): string {
    return this.selectedOption;
  }
}
