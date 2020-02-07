import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../models/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  modificando:boolean;
  user:UserModel;
  nombre:string;
  apellidos:string;
  nacimiento:string;
  genero:string;
  constructor() {
    this.user = new UserModel();
      this.genero = 'Selecciona un genero'
   }

  ngOnInit() {
    
  }

  asignarValores(){
    this.user.name = this.nombre;
    this.user.lastName = this.apellidos;
    this.user.gender = this.genero;
    this.user.birthDate = new Date(this.nacimiento);
  }
}
