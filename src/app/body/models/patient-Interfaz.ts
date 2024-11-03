export interface Paciente {
  idPaciente: number;
  nombrePaciente: string;
  contactoPaciente: string;
  fechaCitaPaciente: Date;
  partesAfectadas: PartesAfectadas[];
  observaciones?: string;
}

export interface PartesAfectadas {
  idPaciente?: number;
  parte: string;
}
