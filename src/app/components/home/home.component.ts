import { Component, OnInit } from '@angular/core';
import { InfoService } from 'src/app/services/info.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products_to_show = []
  listaProductos:any = {}
  paginacionMax:any;
  paginacionMin:any;
  paginacionForm:any;
  constructor(private info:InfoService) {
    this.products_to_show = info.products;
    console.log(this.products_to_show.length)
    this.pagineichon();
   }

  ngOnInit() {
  }
  pagineichon(){
    // for (let i in this.products_to_show){
    //   this.listaProductos= {
    //     i
    //   }
    // }
    // console.log(this.listaProductos)
    this.paginacionMax = this.products_to_show.length
    this.paginacionMin = 12;
    this.paginacionForm = this.paginacionMax/this.paginacionMin
  }

}
