import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinit',
  templateUrl: './infinit.page.html',
  styleUrls: ['./infinit.page.scss'],
})
export class InfinitPage implements OnInit {

  data: any[]=  Array(20);

  @ViewChild(IonInfiniteScroll, { static: false }) infiniteScroll!: IonInfiniteScroll;

  constructor() { }

  ngOnInit() {
  }

  loadData(){
    // console.log(event);
    setTimeout (()=>{
      if(this.data.length > 50)
      {
        this.infiniteScroll.complete();
        this.infiniteScroll.disabled = true;
        return;
      }
      const nuevoArr= Array(20);
      this.data.push(...nuevoArr);
      // event.target.complete();
      this.infiniteScroll.complete();
    },1500);

  }
}
