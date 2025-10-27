import { Component, HostListener } from '@angular/core';
import { RouterLink } from "@angular/router";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sobre-mi',
  imports: [FormsModule],
  templateUrl: './sobre-mi.html',
  styleUrl: './sobre-mi.css'
})
export class SobreMi {
  biografia: string = `Soy Juan David ,un estudiante de la carrea de ingenieria de sistemas  apasionado por la tecnología y el aprendizaje continuo. Mi interés por la programación comenzó en la universidad, donde descubrí el poder de crear soluciones innovadoras a través del código.

En mi tiempo libre, me encanta jugar videojuegos, ver anime y explorar nuevas culturas. Mi pasión por la comida me ha llevado a probar platillos de todo el mundo, especialmente los chinos como el dim sum, el mapo tofu y los dumplings. También disfruto de la comida italiana, como la pizza napolitana, y no puedo resistirme a un buen sushi japonés.

Mi objetivo es combinar mi amor por la tecnología con mis intereses personales, creando proyectos que no solo sean funcionales, sino también divertidos y accesibles para todos.`;

  @HostListener('window:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    if (event.code === 'Space') {
      event.preventDefault();
    }
  }
}
