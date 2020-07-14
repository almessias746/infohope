import { Component, OnInit } from '@angular/core';
import { SITE } from '../../../enum/Site.enum';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  title = SITE.company;

  constructor() { }

  ngOnInit(): void {
  }

}
