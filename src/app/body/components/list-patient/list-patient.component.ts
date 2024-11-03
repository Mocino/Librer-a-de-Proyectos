import { Component, OnInit } from '@angular/core';
import { Paciente } from '../../models/patient-Interfaz';
import { PacienteService } from '../../services/paciente.service';

@Component({
  selector: 'app-list-patient',
  templateUrl: './list-patient.component.html',
  styleUrls: ['./list-patient.component.css']
})
export class ListPatientComponent implements OnInit {

  pacientes!: Paciente[];


  constructor(
    private _pacienteService: PacienteService
  ) {}

  ngOnInit() {
    this.obtenerPacientes();
  }

  obtenerPacientes() {
    this._pacienteService.getPacientes().subscribe({
      next: (data: Paciente[])=>{
        this.pacientes = data;
      },
      error: (error) => {
        console.error('Error al obtener los pacientes:', error);
      },
      complete: () => {
        console.log('solicitud completa')
      }
    })
  }

  editarPaciente(paciente: Paciente) {
    // Aquí puedes implementar la lógica para editar o ver detalles del paciente
    console.log('Paciente seleccionado:', paciente);
  }
}
