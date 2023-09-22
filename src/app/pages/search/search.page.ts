import { Component, OnInit } from '@angular/core';
import { DatasService } from 'src/app/services/datas.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  albumes: any[] = [];
  textoBuscar: string ='';


  constructor(private dataService: DatasService) { }

  ngOnInit() {
    this.dataService.getAlbumes().subscribe(albumes =>{
      this.albumes = albumes
    })
  }
  onSearchChange(event){
    // console.log(event)
    this.textoBuscar= event.detail.value
  }
}
