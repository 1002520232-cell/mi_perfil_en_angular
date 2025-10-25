import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { PerfilService } from '../../servicios/perfil.service';
import { Perfil } from '../../modelos/perfil';

@Component({
  selector: 'app-cabecera',
  standalone: true,
  templateUrl: './cabecera.html',
  styleUrls: ['./cabecera.css'],
  imports: [RouterModule, AsyncPipe] // Esto permite usar routerLink y async pipe en la plantilla
})
export class CabeceraComponent {
  perfil$: Observable<Perfil>;

  constructor(private perfilService: PerfilService) {
    this.perfil$ = this.perfilService.getPerfil();
  }
}