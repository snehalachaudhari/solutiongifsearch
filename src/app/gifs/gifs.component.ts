import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GiphydataService } from '../giphydata.service';

@Component({
  selector: 'app-gifs',
  templateUrl: './gifs.component.html',
  styleUrls: ['./gifs.component.scss']
})
export class GifsComponent implements OnInit,OnDestroy {
  gifs:any[]=[];
  subs:Subscription

  constructor(private dataService:GiphydataService) { }

  ngOnInit(): void {
    this.dataService.getGiphs();
    this.subs = this.dataService.getGifs()
    .subscribe((response:any)=>{
      this.gifs = response; 
    });
  }

  ngOnDestroy(){
    this.subs.unsubscribe();
      }

}
