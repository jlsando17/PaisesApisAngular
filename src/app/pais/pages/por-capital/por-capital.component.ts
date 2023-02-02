import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent {
  termino: string = '';
  hayError: boolean=false;
  paises:Country[]=[];

  constructor (private PaisService:PaisService){

  }
  Buscar (termino:string) {
    this.hayError=false;
    this.termino=termino;
    
    this.PaisService.BuscarCapital(this.termino)
    .subscribe((paises)=>{
      console.log(paises);
      
      this.paises=paises;

    }, (err)=>{
      this.hayError=true;
      this.paises=[];
    });
  }
  sugerencias(termino:string){
    this.hayError=false;
    

  }

}
