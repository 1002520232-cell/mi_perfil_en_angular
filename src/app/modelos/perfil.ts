export interface Project {
  titulo: string;
  descripcion: string;
  tecnologias: string[];
  impacto?: string;
  imagen?: string;
}

export interface Perfil {
  nombre: string;
  resumen?: string;
  habilidades: string[];
  proyectos: Project[];
  contacto?: {
    email?: string;
    web?: string;
  };
}
