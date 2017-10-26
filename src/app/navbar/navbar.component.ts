import { Component, OnInit } from '@angular/core';
import { JsonPipe } from '@angular/common';

import { ImportService } from '../shared/import.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  jsonFile: any;
  constructor(private importService: ImportService) { }

  ngOnInit() {
  }

}
