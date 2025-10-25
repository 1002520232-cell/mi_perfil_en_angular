import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Perfil, Project } from '../modelos/perfil';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {
  private data: Perfil = {
    nombre: 'Juan David Aguila Silvera',
    resumen: 'Ingeniero de Sistemas con experiencia en desarrollo web, redes y diseño de interfaces.',
    habilidades: [
      'Angular',
      'TypeScript',
      'Python (Django)',
      'Node.js',
      'Git / GitHub',
      'SQL / PostgreSQL',
      'Figma (UX/UI)'
    ],
    proyectos: [
      {
        titulo: 'Sistema de Gestión de Inventario',
        descripcion: 'Plataforma web desarrollada con Python (Django) para automatizar trazabilidad y control de stock.',
        tecnologias: ['Python', 'Django', 'PostgreSQL', 'HTML/CSS'],
        impacto: 'Reducción del 25% en errores de stock',
        imagen: 'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&w=800&q=80'
      },
      {
        titulo: 'Configuración de Red Segura (VPN)',
        descripcion: 'Implementación y configuración de una red VPN usando OpenVPN en un entorno Linux.',
        tecnologias: ['Linux', 'OpenVPN', 'Bash'],
        imagen: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80'
      },
      {
        titulo: 'Prototipo de Aplicación Móvil (UX)',
        descripcion: 'Prototipo de gestión de finanzas personales, diseñado en Figma y listo para desarrollo.',
        tecnologias: ['Figma', 'Prototipado', 'UX'],
        imagen: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80'
      }
    ],
    contacto: {
      email: 'tu-email@ejemplo.com',
      web: ''
    }
  };

  constructor() {}

  getPerfil(): Observable<Perfil> {
    return of(this.data);
  }

  getHabilidades(): Observable<string[]> {
    return of(this.data.habilidades);
  }

  getProyectos(): Observable<Project[]> {
    return of(this.data.proyectos);
  }
}
