import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Aplicacion } from '../../modelos/aplicacion';
import { Aplicaciones } from '../../servicios/aplicaciones';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule], // ✅ MUY IMPORTANTE
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
})
export class Inicio implements OnInit {
  
  aplicaciones: Aplicacion[] = [];

  constructor(private aplicacionesService: Aplicaciones) {}

  ngOnInit(): void {
    this.aplicaciones = this.aplicacionesService.obtenerAplicaciones();
    console.log('✅ Aplicaciones cargadas:', this.aplicaciones);
  }
}