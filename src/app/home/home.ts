import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilService } from '../servicios/perfil.service';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { Perfil } from '../modelos/perfil';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, AsyncPipe],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home {
  perfil$: Observable<Perfil>;

  constructor(private perfilService: PerfilService) {
    this.perfil$ = this.perfilService.getPerfil();
  }
}