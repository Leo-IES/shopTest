import { Component, OnInit} from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

import { UserModel } from '../../models/user.model';

import {NgForm} from '@angular/forms';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

import Swal from 'sweetalert2';





@Component({
  selector: 'app-singup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public form:FormGroup;

  usuarios:any={};
  usuarioModel: UserModel= new UserModel;

  constructor(private router: ActivatedRoute,
    private usuService: UsersService, private fb:FormBuilder) { 

      this.usuService.getUsuarios().subscribe( usuarios => {
       console.log("Usuarios", usuarios) 
    });

    this.form = this.fb.group({
      username:["", Validators.compose([Validators.required,Validators.minLength(3)])],
      password:["", Validators.compose([Validators.required,Validators.minLength(8)])],
      email:["", Validators.compose([Validators.required,Validators.email])],
      cellphone:["", Validators.compose([Validators.required,Validators.minLength(10),Validators.maxLength(10)])],
      
    })

  }

  ngOnInit()
{
  this.usuarioModel=new UserModel;
}


  regUsuarios(form: NgForm)
  {
    if (form.invalid){return;}

    this.usuService.crearUsuarios(this.usuarioModel)
    .subscribe(resp=>{
      
    console.log("Usuario registrado:", resp);
    Swal.fire({
      allowOutsideClick:false,
      text:"Usuario registrado",
      timer: 1000
    });

  },
  (err) => {
    Swal.fire({
      allowOutsideClick:false,
      title:"Error al registrar",
      text:err.error.message
    });
   } );
}



}
