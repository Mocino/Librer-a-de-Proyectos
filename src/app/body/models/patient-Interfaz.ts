export interface Paciente {
  idPaciente: number;
  nombrePaciente: string;
  contactoPaciente: string;
  fechaCitaPaciente: Date;
  parteAfectada: PartesAfectadas[];
  observacion?: string;
}

export interface PartesAfectadas {
  parte: string;
}
