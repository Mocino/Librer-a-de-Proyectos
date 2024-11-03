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
    console.log('información con partes afectadas', this.paciente)
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
      fechaCita: fechaFormateada, // Usar la fecha formateada
      observacion: paciente.observaciones || '',
      parteAfectada: paciente.partesAfectadas
    });

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

  onPartSelected(part: string): void {
    if (!this.bodySelectedParts.has(part)) {
      this.bodySelectedParts.add(part);
      this.selectedTags.push({ parte: part });
    } else {
      this.bodySelectedParts.delete(part);
      this.selectedTags = this.selectedTags.filter(tag => tag.parte !== part);
    }

    // Actualiza el valor del array en el formulario
    this.patientForm.patchValue({
      parteAfectada: this.selectedTags
    });
  }

  removeTag(tagToRemove: string): void {
    this.selectedTags = this.selectedTags.filter(tag => tag.parte !== tagToRemove);
    this.bodySelectedParts.delete(tagToRemove);

    // Actualiza el valor del array en el formulario
    this.patientForm.patchValue({
      parteAfectada: this.selectedTags
    });
  }
}
