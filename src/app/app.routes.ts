import { Routes } from '@angular/router';
import { Inicio } from './componentes/inicio/inicio';
import { SobreMi } from './componentes/sobre-mi/sobre-mi';
import { Contacto } from './componentes/contacto/contacto';
import { Estudios } from './componentes/estudios/estudios';
import { Hobbies } from './componentes/hobbies/hobbies';
import { Proyectos } from './componentes/proyectos/proyectos';
import { Galeria } from './componentes/galeria/galeria';

export const routes: Routes = [
    {path: '', component:Inicio, title:'Inicio'},
    {path: 'sobre-mi', component:SobreMi, title:'Sobre mi'},
    {path: 'estudios', component:Estudios, title:'Estudios'},
    {path: 'hobbies', component:Hobbies, title:'Hobbies'},
    {path: 'proyectos', component:Proyectos, title:'Proyectos'},
    {path: 'galeria', component:Galeria, title:'Galería'},
    {path: 'contacto', component:Contacto, title:'Contacto'},
    {path: '', component:Inicio, title:''},
];
