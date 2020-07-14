import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SITE } from '../../../enum/Site.enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  title = SITE.company;

  constructor() { }

  ngOnInit(): void {
  }

}
