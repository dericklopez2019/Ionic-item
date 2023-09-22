import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Componente } from './interfaces/interfaces';
import { MenuController } from '@ionic/angular';
import { DatasService } from './services/datas.service';
import {register} from 'swiper/element/bundle';
register();
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  componentes: Observable<Componente[]>;

  constructor(private menuCtrl: MenuController, private dataService: DatasService ) { }

  ngOnInit() {
    this.componentes = this.dataService.getMenuOpts();
  }
}
