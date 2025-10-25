
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { PerfilService } from '../../servicios/perfil.service';
import { Project } from '../../modelos/perfil';

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './proyectos.html',
  styleUrls: ['./proyectos.css']
})
export class Proyectos {
  proyectos$: Observable<Project[]>;
  selectedIndex: number | null = null;

  constructor(private perfilService: PerfilService) {
    this.proyectos$ = this.perfilService.getProyectos();
  }

  toggle(index: number) {
    this.selectedIndex = this.selectedIndex === index ? null : index;
  }
}