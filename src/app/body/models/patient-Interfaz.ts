export interface Paciente {
  nombrePaciente: string;
  contacto: string;
  fechaCita: Date;
  parteAfectada: PartesAfectadas[];
  observacion?: string;
}

export interface PartesAfectadas {
  parte: string;
}
