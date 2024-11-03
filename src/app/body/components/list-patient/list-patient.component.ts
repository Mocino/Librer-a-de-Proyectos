import { Component, OnInit } from '@angular/core';
import { Paciente } from '../../models/patient-Interfaz';
import { PacienteService } from '../../services/paciente.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-patient',
  templateUrl: './list-patient.component.html',
  styleUrls: ['./list-patient.component.css']
})
export class ListPatientComponent implements OnInit {

  pacientes!: Paciente[];


  constructor(
    private _pacienteService: PacienteService,
    private _router: Router,
    private route: ActivatedRoute
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
    this._router.navigate(['../agregar-paciente'], {
      relativeTo: this.route,
      state: { paciente }  // Pasar los datos del paciente a la ruta
    });
  }

}
