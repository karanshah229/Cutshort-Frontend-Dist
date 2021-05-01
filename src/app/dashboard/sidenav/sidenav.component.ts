import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  private online: Boolean = true;

  constructor() {}

  ngOnInit(): void {}

  get isOnline(): Boolean {
    return this.online;
  }
}
