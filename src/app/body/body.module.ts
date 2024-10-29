import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodySelectorComponent } from './components/body-selector/body-selector.component';
import { BodyRoutingModule } from './body-routing.module';
import { MenuComponent } from './components/menu/menu.component';
import { CardModule } from 'primeng/card';
import { AddEditPatientComponent } from './components/add-edit-patient/add-edit-patient.component';
import { ListPatientComponent } from './components/list-patient/list-patient.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [
    BodySelectorComponent,
    MenuComponent,
    AddEditPatientComponent,
    ListPatientComponent
  ],
  imports: [
    CommonModule,
    BodyRoutingModule,
    ReactiveFormsModule,
    CardModule,
    TableModule,
    ToastModule,
    ButtonModule
  ],
  providers: [
    MessageService // Agrega MessageService aquí
  ],
})
export class BodyModule { }
