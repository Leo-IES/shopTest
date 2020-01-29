import { Component, OnInit } from '@angular/core';
import { InfoService } from 'src/app/services/info.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products_to_show = []

  constructor(private info:InfoService) {
    this.products_to_show = info.products;
   }

  ngOnInit() {
  }

}
