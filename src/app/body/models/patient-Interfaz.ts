export interface Paciente {
  nombrePaciente: string;
  contactoPaciente: string;
  fechaCitaPaciente: Date;
  parteAfectada: PartesAfectadas[];
  observacion?: string;
}

export interface PartesAfectadas {
  parte: string;
}
