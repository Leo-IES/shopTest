import { Component, OnInit, Input} from "@angular/core";
import { Router } from "@angular/router";
import { ItemModel } from 'src/app/models/item.model';

@Component({
  selector: "app-item",
  templateUrl: "./item.component.html",
  styleUrls: ["./item.component.css"]
})
export class ItemComponent implements OnInit {
  @Input() producto:ItemModel
  @Input() id:number

  constructor(private router: Router) {
  }

  ngOnInit() {
    
  }

  irPaginaDelItem() {
    this.router.navigate(['/item-desc', this.id % 6])
  }

  // agregarAlCarrito() {}
}
