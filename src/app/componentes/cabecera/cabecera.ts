import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { PerfilService } from '../../servicios/perfil.service';
import { Perfil } from '../../modelos/perfil';

@Component({
  selector: 'app-cabecera',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './cabecera.html',
  styleUrls: ['./cabecera.css']
})
export class CabeceraComponent implements OnInit {
  perfil: Perfil | null = null;
  loading: boolean = true;
  menuOpen: boolean = false;

  constructor(private perfilService: PerfilService) {}

  ngOnInit() {
    this.loadPerfil();
  }

  async loadPerfil(): Promise<void> {
    this.loading = true;
    try {
      this.perfil = await this.perfilService.getPerfil();
    } catch (error) {
      console.error('Error cargando perfil:', error);
    } finally {
      this.loading = false;
    }
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }
}
