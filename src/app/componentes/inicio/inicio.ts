import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Aplicacion } from '../../modelos/aplicacion';
import { Aplicaciones } from '../../servicios/aplicaciones';
import { PerfilService } from '../../servicios/perfil.service';
import { Perfil } from '../../modelos/perfil';
import { SkillItem } from '../skill-item/skill-item';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule, SkillItem], // ✅ MUY IMPORTANTE
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
})
export class Inicio implements OnInit {

  perfil: Perfil | null = null;
  loading: boolean = true;
  error: string | null = null;
  aplicaciones: Aplicacion[] = [];

  constructor(private aplicacionesService: Aplicaciones, private perfilService: PerfilService) {}

  ngOnInit(): void {
    this.loadPerfil();
    this.aplicaciones = this.aplicacionesService.obtenerAplicaciones();
    console.log('✅ Aplicaciones cargadas:', this.aplicaciones);
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

  onSkillClicked(skill: string) {
    console.log('Skill clicked:', skill);
  }
}
