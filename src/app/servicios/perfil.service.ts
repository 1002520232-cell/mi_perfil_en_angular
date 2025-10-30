import { Injectable } from '@angular/core';
import { Perfil, Project } from '../modelos/perfil';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {
  private data: Perfil = {
    nombre: '',
    resumen: 'estudioso en desarrollo web, redes y diseño de interfaces.',
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
        imagen: 'https://s2.studylib.es/store/data/005748001_1-dfae73ec50bbbe721828a6abab82cad3.png'
      },
      {
        titulo: 'Prototipo de Aplicación Móvil (UX)',
        descripcion: 'Prototipo de gestión de finanzas personales, diseñado en Figma y listo para desarrollo.',
        tecnologias: ['Figma', 'Prototipado', 'UX'],
        imagen: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80'
      },
      
     
    ],
    contacto: {
      email: 'tu-email@ejemplo.com',
      web: ''
    }
  };

  constructor() {}

  getPerfil(): Promise<Perfil> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simular un error aleatorio para demostrar manejo de errores
        if (Math.random() < 0.1) { // 10% de probabilidad de error
          reject(new Error('Error al cargar el perfil'));
        } else {
          resolve(this.data);
        }
      }, 1500); // Simular 1.5 segundos de carga
    });
  }

  getHabilidades(): Promise<string[]> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < 0.1) {
          reject(new Error('Error al cargar las habilidades'));
        } else {
          resolve(this.data.habilidades);
        }
      }, 1000); // Simular 1 segundo de carga
    });
  }

  getProyectos(): Promise<Project[]> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < 0.1) {
          reject(new Error('Error al cargar los proyectos'));
        } else {
          resolve(this.data.proyectos);
        }
      }, 2000); // Simular 2 segundos de carga
    });
  }
}
