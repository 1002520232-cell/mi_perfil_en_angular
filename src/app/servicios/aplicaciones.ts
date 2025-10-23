import { Injectable } from '@angular/core';
import { Aplicacion } from '../modelos/aplicacion';

@Injectable({
  providedIn: 'root'
})
export class Aplicaciones {
  aplicaciones: Aplicacion[] = [
    {
      titulo: 'Visual Studio Code',
      descripcion: 'Programación y desarrollo de software',
      aplicaciones: ['Windows', 'macOS', 'Linux']
    },
    {
      titulo: 'Git / GitHub',
      descripcion: 'Control de versiones y colaboración',
      aplicaciones: ['Web', 'Windows', 'Mac', 'Linux']
    },
    {
      titulo: 'Figma',
      descripcion: 'Diseño de interfaces y prototipos',
      aplicaciones: ['Web', 'Windows', 'Mac']
    },
    {
      titulo: 'Arduino IDE',
      descripcion: 'Programación de hardware y sistemas embebidos',
      aplicaciones: ['Web', 'Windows', 'Mac']
    },
  ];


  constructor() { } 

  obtenerAplicaciones(): Aplicacion[] {
    return this.aplicaciones;
  }

}
