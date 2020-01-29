import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { InfoService } from "../../services/info.service";

@Component({
  selector: "app-item",
  templateUrl: "./item.component.html",
  styleUrls: ["./item.component.css"]
})
export class ItemComponent implements OnInit {
  productos: any[ ] = [];
  imagen: string;

  constructor(private router: Router, private products: InfoService) {
    this.productos= this.products.products;
    this.imagen = this.products.products[0].images[0].url
    console.log(this.productos)
    
  }

  ngOnInit() {
    
  }

  // irPaginaDelItem() {}

  // agregarAlCarrito() {}
}
