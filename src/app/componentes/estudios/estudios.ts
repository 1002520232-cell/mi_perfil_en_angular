import { Component } from '@angular/core';
import { Aplicacion } from '../../modelos/aplicacion';
import { Aplicaciones } from '../../servicios/aplicaciones';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-estudios',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './estudios.html',
  styleUrls: ['./estudios.css']
})
export class Estudios {
  aplicaciones: Aplicacion[] = []

  constructor(private aplicacionesService: Aplicaciones) {}

  ngOnInit() {
    this.aplicaciones = this.aplicacionesService.obtenerAplicaciones();
  }
    
}
