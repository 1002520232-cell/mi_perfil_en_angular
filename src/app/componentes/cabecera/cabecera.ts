import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Observable } from 'rxjs';
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
  perfil$: Observable<Perfil>;

  constructor(private perfilService: PerfilService) {
    this.perfil$ = this.perfilService.getPerfil();
  }

  ngOnInit() {
    // Inicialización si es necesaria
  }
}