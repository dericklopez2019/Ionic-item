import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DatasService } from 'src/app/services/datas.service';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  superHeroes: Observable<any>;
  publisher: string ='';

  constructor(private dataService: DatasService ) { }

  ngOnInit() {
    this.superHeroes = this.dataService.getHeroes();
  }
  segmentChanged(event) {
    // console.log(event.detail.value);
    // if(event.detail.value === 'todos'){
    //     this.publisher = '';
    // }
    this.publisher = event.detail.value;
  }
}
