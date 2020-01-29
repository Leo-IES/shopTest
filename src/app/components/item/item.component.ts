import { Component, OnInit, Input} from "@angular/core";
import { Router } from "@angular/router";
import { ItemModel } from 'src/app/models/item.model';

@Component({
  selector: "app-item",
  templateUrl: "./item.component.html",
  styleUrls: ["./item.component.css"]
})
export class ItemComponent implements OnInit {
  imagen: string;
  @Input() producto:ItemModel

  constructor(private router: Router) {
  }

  ngOnInit() {
    
  }

  mostrarPuntos():string{
    if(this.producto.name.length > 15)
    return '...'
  }
  // irPaginaDelItem() {}

  // agregarAlCarrito() {}
}
