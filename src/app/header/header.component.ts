import { Component, OnInit } from '@angular/core';
import { GiphydataService } from '../giphydata.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private dataService: GiphydataService) { }

  ngOnInit(): void {
  }

  searchfunc(sValue: string) {
    //alert(sValue);
    if (sValue != '') {
    this.dataService.searchGiphs(sValue);

    }
  }

}
