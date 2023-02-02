import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {


  private apiUrl:string= 'https://restcountries.com/v3.1';
  private apiUrl2:string= 'https://restcountries.com/v2';

  constructor( private http: HttpClient) { }

  BuscarPais(termino:string):Observable<Country[]>{

    const url = `${this.apiUrl}/name/${termino}`;
    return this.http.get<Country[]>(url);
    
    //captura el error y lo transforma en objeto([])
    //.pipe(
    // catchError(err=>of(['hola mundo']))
    //);
  }

  BuscarCapital(termino:string):Observable<Country[]>{
    const url= `${this.apiUrl}/capital/${termino}`;
    return this.http.get<Country[]>(url);
  }

  getPaisPorAlpha(id:string):Observable<Country>{
    const url= `${this.apiUrl2}/alpha/${id}`;
    return this.http.get<Country>(url);
  }

  BuscarRegion(region:string):Observable<Country[]>{
    const url= `${this.apiUrl2}/regionalbloc/${region}`;
    return this.http.get<Country[]>(url);
  }



}
