import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styles: []
})
export class ProductoComponent {

  producto:any = undefined;

  constructor( private route: ActivatedRoute,
               private _ps: ProductosService ) { 

    route.params.subscribe( parametros =>{

      //  console.log( parametros )
      //  console.log( parametros['id'] );

        _ps.cargar_producto(parametros[ 'id' ])
        .subscribe(res => {

        console.log(res.json());


        });

    })

  }

}
