import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DatasService } from 'src/app/services/datas.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  usuarios: Observable<any>;

  @ViewChild(IonList) ionList: IonList;

  constructor(private datasServices: DatasService) { }

  ngOnInit() {

    this.usuarios = this.datasServices.getUsuarios();

  }
  favorite(user:any){
    console.log('favorite',user);
    this.ionList.closeSlidingItems();
  }
  share(user:any){
    console.log('share',user);
    this.ionList.closeSlidingItems();
  }
  eliminar(user:any){
    console.log('eliminar',user);
    this.ionList.closeSlidingItems();
  }
}
