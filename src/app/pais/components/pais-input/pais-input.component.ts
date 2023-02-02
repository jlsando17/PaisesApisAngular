
import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import {  Subject } from 'rxjs';
import {  debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css']
})
export class PaisInputComponent implements OnInit{
 

  @Output() onEnter: EventEmitter<string> = new EventEmitter();
@Output() onDebounce: EventEmitter<string> = new EventEmitter();

@Input() placeholder:string='';

debouncer: Subject<string>=new Subject();

  termino:string='';

  ngOnInit(): void {
    this.debouncer
    .pipe(debounceTime(300))
    .subscribe(valor =>{
      //console.log('debouncer:',valor); de esta forma tambien se puede imprimir
      this.onDebounce.emit(valor)
     
    });
  } 

  Buscar (){
    this.onEnter.emit(this.termino);
  }
   //Esta es una forma para revisar cada caracter ingresado en el buscador. agregar a pais-input.component.html
   // teclaPresionada( event:any){
    //const valor = event.target.value;
    //console.log(valor);
    //console.log(this.termino);
  //}

  teclaPresionada(){
    this.debouncer.next(this.termino);
  }
    
 
  
}
