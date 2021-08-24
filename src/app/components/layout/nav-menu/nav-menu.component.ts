import { Component, OnInit } from '@angular/core';
import { faBars, faHome, faClipboardList, faMap, faPaintRoller, faPallet, faObjectUngroup } from '@fortawesome/free-solid-svg-icons';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({transform: 'translateX(-100%)'}),
        animate('600ms ease-in', style({transform: 'translateX(0%)'}))
      ]),
      transition(':leave', [
        animate('600ms ease-in', style({transform: 'translateX(-100%)'}))
      ])
    ])
  ]
})

export class NavMenuComponent implements OnInit {
  public navBars = faBars;
  public home = faHome;
  public board = faClipboardList;
  public redesign = faPaintRoller;
  public media = faMap;
  public web = faObjectUngroup;
  visible: boolean;

  constructor() { }

  ngOnInit(): void {
  }


}
