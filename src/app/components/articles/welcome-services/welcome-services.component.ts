import {Component, Input, OnInit} from '@angular/core';
import { faGrin }  from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-welcome-services',
  templateUrl: './welcome-services.component.html',
  styleUrls: ['./welcome-services.component.scss']
})
export class WelcomeServicesComponent implements OnInit {
  @Input('Page') page: string;

  public grin = faGrin;

  constructor() { }

  ngOnInit(): void {
  }

}
