import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  etudiants: string = '/etudiants';
  profs: string = '/profs';
  cours: string = '/cours';


  constructor() { }

  ngOnInit(): void {
  }

}
