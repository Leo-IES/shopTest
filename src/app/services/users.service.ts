import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {UserModel} from '../models/user.model'




@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {
    this.leerToken();
    console.log("SERVICIO LISTO");

   }

   private url2:string =  'http://18.189.157.105:3000/';
   private token:string =  '';
   userToken: string;

   getQuery( query: string ) {

    const url = `http://18.189.157.105:3000/${ query }`;

   /* const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAxWYXpwRuLnOZLyVuW-KdaSqAPjGeYgkmw--8sdY6IjmGbcWOsyGsbwrd-I_yCAI0eYHnJNzVO4e4PgaA'
    }); */

    return this.http.get(url);
    
  }

  getUsuarios() {
    return this.getQuery('users');        
  }

  crearUsuarios(usuarios:UserModel)
  {
  // let json = JSON.stringify(usuarios)
   return this.http.post(`${this.url2}users`, usuarios);
  }

  loginUsuarios( usuario: UserModel ) {

    const authData = {
      ...usuario,
      returnSecureToken: true
    };

    return this.http.post(
      `${ this.url2 }auth${this.token}`,
      authData
    ).pipe(
      map( resp => {
        this.guardarToken( resp['token'] );
        return resp;
      })
    );
  }

  private guardarToken( token: string ) {
    this.userToken = token;
    localStorage.setItem('token', token);

    // let hoy = new Date();
    // hoy.setSeconds( 3600 );

    // localStorage.setItem('expira', hoy.getTime().toString() );
  }

  leerToken() {

    if ( localStorage.getItem('token') ) {
      this.userToken = localStorage.getItem('token');
    } else {
      this.userToken = '';
    }
    return this.userToken;
  }

}
