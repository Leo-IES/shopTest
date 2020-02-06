import { Component, OnInit } from '@angular/core';
import { CarritoModel } from 'src/app/models/carrito.model';
import { InfoService } from 'src/app/services/info.service';
import { PedidoModel } from 'src/app/models/pedido.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  carrito:CarritoModel;

  constructor(private info:InfoService) {
    this.carrito = info.carrito;
  }

  ngOnInit() {
  }
  removerPedido(pedido:PedidoModel){
    
  }
}
