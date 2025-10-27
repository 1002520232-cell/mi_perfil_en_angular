
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilService } from '../../servicios/perfil.service';
import { Project } from '../../modelos/perfil';

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './proyectos.html',
  styleUrls: ['./proyectos.css']
})
export class Proyectos implements OnInit {
  proyectos: Project[] = [];
  loading: boolean = true;
  error: string | null = null;
  selectedIndex: number | null = null;

  constructor(private perfilService: PerfilService) {}

  ngOnInit(): void {
    this.loadProyectos();
  }

  async loadProyectos(): Promise<void> {
    this.loading = true;
    this.error = null;
    try {
      this.proyectos = await this.perfilService.getProyectos();
    } catch (err) {
      this.error = err instanceof Error ? err.message : 'Error desconocido al cargar proyectos';
    } finally {
      this.loading = false;
    }
  }

  toggle(index: number) {
    this.selectedIndex = this.selectedIndex === index ? null : index;
  }

  retryLoad() {
    this.loadProyectos();
  }
}
