import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-edit-patient',
  templateUrl: './add-edit-patient.component.html',
  styleUrls: ['./add-edit-patient.component.css']
})
export class AddEditPatientComponent implements OnInit{

  patientForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.myForm();
  }

  myForm(): void {
    this.patientForm = this.fb.group({
      nombrePaciente: ['', [Validators.required, Validators.minLength(3)]],
      contacto: ['', [Validators.required,   Validators.pattern(/^(?:[^@]+@[^@]+\.[a-zA-Z]{2,}|\d{8})$/)      ]],
      fechaCita: ['', Validators.required],
      parteAfectada: ['', Validators.required],
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
  }

}
