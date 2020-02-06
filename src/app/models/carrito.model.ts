import { PedidoModel } from './pedido.model'

export class CarritoModel{
    pedidos:PedidoModel[];
    total:number = 0;
}