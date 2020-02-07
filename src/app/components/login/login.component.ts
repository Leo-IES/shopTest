import { Component, OnInit } from '@angular/core';

import {NgForm} from '@angular/forms';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserModel } from 'src/app/models/user.model';

import Swal from 'sweetalert2';
import { timer } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuarioModel: UserModel= new UserModel;
  public form:FormGroup;

  datosUsuario: any={};

  constructor(private router: Router,
    private usuService: UsersService, private fb:FormBuilder) {
      this.form = this.fb.group({
        username:["", Validators.compose([Validators.required,Validators.minLength(3)])],
        password:["", Validators.compose([Validators.required,Validators.minLength(8)])]
      })
     }

  ngOnInit() {
    this.usuarioModel=new UserModel;
  }

  loginUsuarios(form: NgForm)
  {
    if (form.invalid){ 
      return;
    }

    this.usuService.loginUsuarios( this.usuarioModel )
      .subscribe( resp => {
    
        console.log("DATOS USUARIOS:", resp)
       

        Swal.fire({
          allowOutsideClick:false,
          text:"Comprobando..",
          timer: 1000
        });
        Swal.showLoading();
      
       this.datosUsuario=resp;
       this.usuService.usuarioLogeado=this.datosUsuario.user.id;
       console.log("ID del usuario:", this.usuService.usuarioLogeado)

         this.router.navigateByUrl('/home'); 

         Swal.fire({
          allowOutsideClick:false,
          text:"Bienvenido!",
          timer: 1000
        });
        
}, (err) => {
  Swal.fire({
    allowOutsideClick:false,
    text:"Datos incorrectos",
  });
}

);

}}
