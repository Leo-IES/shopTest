import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  item = {}

  constructor(
    private router:Router
    ) { }

  ngOnInit() {
  }

  irPaginaDelItem(){

  }

  agregarAlCarrito(){
    
  }
}
