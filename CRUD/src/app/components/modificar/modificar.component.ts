import { Component, OnInit } from '@angular/core';
import {EquipoService,Equipo} from '../../services/equipo.service';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {

  equipo : any| Equipo = {
    id_equipo : '',
    nombre : '',
    entrenador : '',
    logo : ''
  };

 

  constructor(private equipoService:EquipoService,private router:Router,private activatedRoute:ActivatedRoute) { 

  }

  ngOnInit(): void {
    const id_entrada =  <string>this.activatedRoute.snapshot.params['id'];
    console.log('ID de entrada: '+id_entrada);

    if(id_entrada){
      this.equipoService.getEquipo(id_entrada).subscribe(
        res=>{
          console.log(res);
          
          
          this.equipo = res[0];

          console.log(this.equipo.nombre);
          
        },
        err=>{
          console.log(err);
          
        }
      );
    }
    
  }

  modificar(){

    this.equipoService.editEquipo(this.equipo.id_equipo,this.equipo).subscribe(
      res=>{
        console.log(res);
        
      },
      err=>{
        console.log(err);
        
      }
 
    );

    this.router.navigate(['/inicio']);
  }

}
