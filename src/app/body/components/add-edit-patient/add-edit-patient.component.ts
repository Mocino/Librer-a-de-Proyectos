import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Paciente, PartesAfectadas } from '../../models/patient-Interfaz';

@Component({
  selector: 'app-add-edit-patient',
  templateUrl: './add-edit-patient.component.html',
  styleUrls: ['./add-edit-patient.component.css']
})
export class AddEditPatientComponent implements OnInit{

  patientForm!: FormGroup;
  selectedTags: PartesAfectadas[] = [];
  bodySelectedParts: Set<string> = new Set<string>();
  paciente: Paciente | null = null

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.myForm();

    this.paciente = history.state.paciente || null; // Esto te da el paciente o null si no se pasó
    if (this.paciente) {
      this.populateForm(this.paciente); // Llama a una función para llenar el formulario si hay un paciente
    }
  }

  populateForm(paciente: Paciente): void {
    // Convertir la fecha a formato YYYY-MM-DD
    const fecha = new Date(paciente.fechaCitaPaciente);
    const fechaFormateada = fecha.toISOString().split('T')[0];

    this.patientForm.patchValue({
      nombrePaciente: paciente.nombrePaciente,
      contacto: paciente.contactoPaciente,
      fechaCita: fechaFormateada,
      observacion: paciente.observaciones || '',
      parteAfectada: paciente.partesAfectadas
    });

    const mockPartesAfectadas: PartesAfectadas[] = [
      // { idPaciente: 1, parteAfectada: 'brazo izquierdo' },
      // { idPaciente: 1, parteAfectada: 'torzo' },
      // { idPaciente: 1, parteAfectada: 'brazo derecho' },
      // { idPaciente: 1, parteAfectada: 'pierna derecha' },
      // { idPaciente: 1, parteAfectada: 'pierna izquierda' },
      // { idPaciente: 1, parteAfectada: 'pie derecho' },
      // { idPaciente: 1, parteAfectada: 'pie izquierdo' },
      // { idPaciente: 1, parteAfectada: 'cuello' },
      // { idPaciente: 1, parteAfectada: 'cabeza' }
    ];

    // this.onPartSelected(mockPartesAfectadas)
    this.onPartSelected(paciente.partesAfectadas)

    this.selectedTags = paciente.partesAfectadas;

    console.log('patch', this.patientForm.value);
  }



  myForm(): void {
    this.patientForm = this.fb.group({
      nombrePaciente: ['', [Validators.required, Validators.minLength(3)]],
      contacto: ['', [Validators.required, Validators.pattern(/^(?:[^@]+@[^@]+\.[a-zA-Z]{2,}|\d{8})$/)]],
      fechaCita: ['', Validators.required],
      parteAfectada: [[], Validators.required],  // Array vacío al iniciar
      observacion: ['']
    });
  }

  onSubmit(): void {
    if(this.patientForm.valid){
      const patientData = this.patientForm.value;
      console.log('Data of patient:', patientData);
    } else {
      console.log('Invalidación');
    }
  }

  onReset(): void {
    this.patientForm.reset();
    this.selectedTags = [];
    this.bodySelectedParts.clear();
  }

  onPartSelected(parts: PartesAfectadas[]): void {
    parts.forEach(part => {
      const parteAfectada = part.parteAfectada;  // Obtenemos la parte afectada como string

      console.log('loco',parteAfectada)

      if (!this.bodySelectedParts.has(parteAfectada)) {
        this.bodySelectedParts.add(parteAfectada);
        this.selectedTags.push(part);  // Agregamos el objeto completo { parteAfectada, idPaciente }
      } else {
        this.bodySelectedParts.delete(parteAfectada);
        this.selectedTags = this.selectedTags.filter(tag => tag.parteAfectada !== parteAfectada);
      }
    });

    // Actualiza el valor del array en el formulario
    this.patientForm.patchValue({
      parteAfectada: this.selectedTags
    });

  }



  removeTag(tagToRemove: string): void {
    this.selectedTags = this.selectedTags.filter(tag => tag.parteAfectada !== tagToRemove);
    this.bodySelectedParts.delete(tagToRemove);

    // Actualiza el valor del array en el formulario
    this.patientForm.patchValue({
      parteAfectada: this.selectedTags
    });
  }
}
