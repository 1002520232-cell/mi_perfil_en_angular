import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilService } from '../servicios/perfil.service';
import { Perfil } from '../modelos/perfil';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home implements OnInit {
  perfil: Perfil | null = null;
  loading: boolean = true;
  error: string | null = null;

  constructor(private perfilService: PerfilService) {}

  ngOnInit(): void {
    this.loadPerfil();
  }

  async loadPerfil(): Promise<void> {
    this.loading = true;
    this.error = null;
    try {
      this.perfil = await this.perfilService.getPerfil();
    } catch (err) {
      this.error = err instanceof Error ? err.message : 'Error desconocido al cargar perfil';
    } finally {
      this.loading = false;
    }
  }
}
