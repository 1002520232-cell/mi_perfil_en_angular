import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hobbies',
  imports: [FormsModule, CommonModule],
  templateUrl: './hobbies.html',
  styleUrl: './hobbies.css'
})
export class Hobbies {
  // Propiedad para filtro de búsqueda
  filtroBusqueda: string = '';

  // Propiedades para mostrar/ocultar secciones
  mostrarVideojuegos: boolean = true;
  mostrarMusica: boolean = true;
  mostrarAnime: boolean = true;

  // Lista de hobbies para filtrar
  hobbies = [
    { nombre: 'Videojuegos y eSports', categoria: 'videojuegos', descripcion: 'Fortnite, Mobile Legends, etc.' },
    { nombre: 'Música y Ritmo', categoria: 'musica', descripcion: 'Rock clásico, Hip Hop consciente' },
    { nombre: 'Anime y Cultura Geek', categoria: 'anime', descripcion: 'Death Note, Monster, Steins;Gate' }
  ];

  // Método para toggle de secciones
  toggleSeccion(seccion: string) {
    switch (seccion) {
      case 'videojuegos':
        this.mostrarVideojuegos = !this.mostrarVideojuegos;
        break;
      case 'musica':
        this.mostrarMusica = !this.mostrarMusica;
        break;
      case 'anime':
        this.mostrarAnime = !this.mostrarAnime;
        break;
    }
  }

  // Método para filtrar hobbies basado en búsqueda
  getHobbiesFiltrados() {
    if (!this.filtroBusqueda) {
      return this.hobbies;
    }
    return this.hobbies.filter(hobby =>
      hobby.nombre.toLowerCase().includes(this.filtroBusqueda.toLowerCase()) ||
      hobby.descripcion.toLowerCase().includes(this.filtroBusqueda.toLowerCase())
    );
  }

  // Método para contar hobbies visibles
  getContadorHobbiesVisibles() {
    return this.getHobbiesFiltrados().length;
  }

  // Método para resetear filtros
  resetearFiltros() {
    this.filtroBusqueda = '';
    this.mostrarVideojuegos = true;
    this.mostrarMusica = true;
    this.mostrarAnime = true;
  }

  // Métodos para determinar visibilidad de secciones basado en filtro y toggle
  isVideojuegosVisible() {
    return this.mostrarVideojuegos && (this.filtroBusqueda === '' || this.getHobbiesFiltrados().some(h => h.categoria === 'videojuegos'));
  }

  isMusicaVisible() {
    return this.mostrarMusica && (this.filtroBusqueda === '' || this.getHobbiesFiltrados().some(h => h.categoria === 'musica'));
  }

  isAnimeVisible() {
    return this.mostrarAnime && (this.filtroBusqueda === '' || this.getHobbiesFiltrados().some(h => h.categoria === 'anime'));
  }
}
