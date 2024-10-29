import { Component, OnInit } from '@angular/core';
import { Paciente } from '../../models/patient-Interfaz';

@Component({
  selector: 'app-list-patient',
  templateUrl: './list-patient.component.html',
  styleUrls: ['./list-patient.component.css']
})
export class ListPatientComponent implements OnInit {

  pacientes!: Paciente[];
  expandedRows: { [key: string]: boolean } = {};

  private mockPacientes: Paciente[] = [
    {
      nombrePaciente: 'Juan Pérez',
      contacto: 'juan.perez@example.com',
      fechaCita: new Date('2024-01-15'),
      parteAfectada: [{ parte: 'cabeza' }, { parte: 'brazoi' }],
      observacion: 'Requiere seguimiento'
    },
    {
      nombrePaciente: 'Ana Gómez',
      contacto: 'ana.gomez@example.com',
      fechaCita: new Date('2024-02-10'),
      parteAfectada: [{ parte: 'torzo' }],
    },
    {
      nombrePaciente: 'Luis Rodríguez',
      contacto: 'luis.rodriguez@example.com',
      fechaCita: new Date('2024-03-05'),
      parteAfectada: [{ parte: 'piernai' }, { parte: 'piesi' }],
      observacion: 'Recuperación favorable'
    }
  ];

  constructor() {}

  ngOnInit() {
    this.pacientes = this.mockPacientes;
  }

}
