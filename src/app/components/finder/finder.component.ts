import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-finder',
  templateUrl: './finder.component.html',
  styleUrls: ['./finder.component.css']
})
export class FinderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
export class InputTextDemo {

  text: string;

  disabled: boolean = true;

  toggleDisabled() {
      this.disabled = !this.disabled;
  }
}

