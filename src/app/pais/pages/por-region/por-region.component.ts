import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`button{
    margin-right:5px
  }`]
})
export class PorRegionComponent {

  regiones:string[]=[ 'EU','CARICOM','AU','USAN','EEU','AL','ASEAN','CAIS','CEFTA','NAFTA','SAARC' ]
  regionActiva:string='';
  paises:Country[]=[];
  


  constructor(private paisService: PaisService){}

  getClasesCSS(region:string):string{
    return(region === this.regionActiva)?'btn btn-primary': 'btn btn-outline-primary';
  }

  activarRegion (region:string){
    this.regionActiva=region;

    this.paisService.BuscarRegion (region)
    .subscribe(paises=>this.paises=paises);

  }
 
}
