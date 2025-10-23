import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cabecera',
  standalone: true,
  templateUrl: './cabecera.html',
  styleUrls: ['./cabecera.css'],
  imports: [RouterModule] // Esto permite usar routerLink y routerLinkActiveOptions
})
export class CabeceraComponent {}
