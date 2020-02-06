import { Component, OnInit } from '@angular/core';
import { ItemModel } from 'src/app/models/item.model';
import { ActivatedRoute } from '@angular/router'
import { PedidoModel } from 'src/app/models/pedido.model';
import { InfoService } from 'src/app/services/info.service';


@Component({
  selector: 'app-item-desc',
  templateUrl: './item-desc.component.html',
  styleUrls: ['./item-desc.component.css']
})
export class ItemDescComponent implements OnInit {

  item:ItemModel;
  cantidad:number;
  loading_compra = false;
  mostrar_mensaje = false;

  constructor(private activadedRoute:ActivatedRoute, private info:InfoService) {
    this.activadedRoute.params.subscribe(params =>{
      this.item = this.info.products[params['id']]
    })
    this.cantidad = 0;
   }

  ngOnInit() {
  }

  modificarCantidad(value:number){
    if(value === -1 && this.cantidad === 0) return;
    this.cantidad = this.cantidad + value;
  }

  agregarAlCarrito(){
    this.loading_compra = true;
    let pedido = new PedidoModel();
    pedido.item = this.item;
    pedido.fecha_del_pedido = new Date();
    pedido.cantidad = this.cantidad;
    //console.log(pedido);
    this.info.carrito.pedidos.push(pedido)
    this.info.carrito.total += this.item.price * this.cantidad
    console.log(this.info.carrito);
    this.loading_compra = false;
    this.cantidad = 0;
    this.mostrar_mensaje = true;
    setTimeout(()=>{this.mostrar_mensaje = false}, 4000)
  }
}
