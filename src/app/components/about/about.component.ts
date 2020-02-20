import { Component, OnInit } from '@angular/core';

export interface AlunosElement {
  name: string;
  position: number;
  number: number;
}

const ELEMENT_DATA: AlunosElement[] = [
  {position: 1, name: 'Cláudio Felgueiras', number: 1081019},
  {position: 2, name: 'José Carlos Teixeira', number: 1101240},
  {position: 3, name: 'Frederico Neves', number: 1980026},
  {position: 4, name: 'Jorge Espírito Santo', number: 1111273},
  {position: 5, name: 'Nuno Sousa', number: 1101064},

];

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'number'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}
