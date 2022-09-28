import { Component, OnInit } from '@angular/core';
import {EquipoService,Equipo} from '../../services/equipo.service';
import {Router} from '@angular/router';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  equipo : Equipo = {
    id_equipo : '',
    nombre : '',
    entrenador : '',
    logo : ''
  };

  constructor(private equipoService:EquipoService,private router:Router) { }

  ngOnInit(): void {
  }

  agregar(){
    delete this.equipo.id_equipo;

    this.equipoService.adEquipo(this.equipo).subscribe();
    this.router.navigate(['/inicio']);
  }

}
