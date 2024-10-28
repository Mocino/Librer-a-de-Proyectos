import { Component, OnInit } from '@angular/core';
export interface Patient {
  id: string;
  name: string;
  age: number;
  gender: string;
  diagnosis: string;
}


@Component({
  selector: 'app-list-patient',
  templateUrl: './list-patient.component.html',
  styleUrls: ['./list-patient.component.css']
})
export class ListPatientComponent implements OnInit {

  patients!: Patient[];

  // Mock de datos
  private mockPatients: Patient[] = [
    {
      id: '1',
      name: 'Juan Pérez',
      age: 30,
      gender: 'Masculino',
      diagnosis: 'Hipertensión'
    },
    {
      id: '2',
      name: 'Ana Gómez',
      age: 25,
      gender: 'Femenino',
      diagnosis: 'Diabetes'
    },
    {
      id: '3',
      name: 'Luis Rodríguez',
      age: 40,
      gender: 'Masculino',
      diagnosis: 'Asma'
    }
    // Puedes agregar más pacientes aquí si lo deseas
  ];

  constructor() {}

  ngOnInit() {
    // Simular la obtención de pacientes
    this.patients = this.mockPatients;
  }
}
